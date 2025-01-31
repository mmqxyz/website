---
sidebar_position: 2
title: Groups
---

# Semaphore groups

A [Semaphore group](/docs/glossary/#semaphore-group) contains [identity commitments](/docs/glossary/#identity-commitment) of group members.
Example uses of groups include the following:

-   poll question that attendees join to rate an event,
-   ballot that members join to vote on a proposal,
-   whistleblowers who are verified employees of an organization.

A Semaphore group is an [incremental Merkle tree](/docs/glossary/#incremental-merkle-tree), and group members (i.e., [identity commitments](/docs/glossary/#identity-commitments)) are tree leaves.
Semaphore groups set the following two parameters:

-   **Group id**: a unique identifier for the group;
-   **Tree depth**: the maximum number of members a group can contain (`max size = 2 ^ tree depth`).

Learn how to work with groups.

-   [**Off-chain groups**](#off-chain-groups)
-   [**On-chain groups**](#on-chain-groups)

## Off-chain groups

-   [Create a group](#create-a-group)
-   [Add members](#add-members)
-   [Remove or update members](#remove-or-update-members)

### Create a group

Use the [`@semaphore-protocol/group`](https://github.com/semaphore-protocol/semaphore/blob/main/packages/group) library `Group` class to create an off-chain group with the following parameters:

-   `Group id`: a unique identifier for the group;
-   `Tree depth`: (_default `20`_) the maximum number of members a group can contain (`max size = 2 ^ tree depth`).

To create a group with default _`treeDepth`_, call the `Group` constructor without the second parameter. For example:

```ts
import { Group } from "@semaphore-protocol/group"

const group = new Group(1)
```

The following example code passes _`treeDepth`_ to create a group for `2 ^ 30 = 1073741824` members:

```ts
import { Group } from "@semaphore-protocol/group"

const group = new Group(1, 30)
```

### Add members

Use the `Group addMember` function to add a member (identity commitment) to a group. For example:

```ts
group.addMember(identityCommitment)
```

To add a batch of members to a group, pass an array to the `Group addMembers` function. For example:

```ts
group.addMembers([identityCommitment1, identityCommitment2])
```

:::caution
When you use the same Semaphore identity across multiple groups, if an attacker takes control of that identity all the groups it is part of will be compromised. Consider using different identities for each group.
:::

### Remove or update members

To remove members from a group, pass the member index to the `Group removeMember` function. For example:

```ts
group.removeMember(0)
```

To update members in a group, pass the member index and the new value to the `Group updateMember` function. For example:

```ts
group.updateMember(0, 2)
```

:::caution
Removing a member from a group sets the node value to a special value (i.e. `zeroValue`).
Given that the node isn't removed, and the length of the `group.members` array doesn't change.
:::

## On-chain groups

The [`SemaphoreGroups`](https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/contracts/base/SemaphoreGroups.sol) contract uses the [`IncrementalBinaryTree`](https://github.com/privacy-scaling-explorations/zk-kit/blob/main/packages/incremental-merkle-tree.sol/contracts/IncrementalBinaryTree.sol) library and provides methods to create and manage groups.

:::info
You can import `SemaphoreGroups.sol` and other Semaphore contracts from the [`@semaphore-protocol/contracts`](https://github.com/semaphore-protocol/semaphore/tree/main/packages/contracts) NPM module.
:::

Alternatively, you can use an already deployed [`Semaphore.sol`](https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/contracts/Semaphore.sol) contract and use its group external functions.

:::caution
`Semaphore.sol` does not check if a member with a specific identity commitment already exists in a group. This check must be done off-chain.
:::

:::caution
`Semaphore.sol` includes a mechanism to verify Semaphore proofs created with old Merkle tree roots, the duration of which can be defined by the admin in the `createGroup` function. Members of a group could then continue to generate valid proofs even after being removed. For more info see the issue [#98](https://github.com/semaphore-protocol/semaphore/issues/98).
:::
