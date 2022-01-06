# cooking
This is where I archive recipes.

I use [Obsidian](https://obsidian.md/) for writing recipies, [obsidian-git](https://github.com/denolehov/obsidian-git) for syncing to GitHub and then I wrote a GitHub action to change Obsidian style links to markdown links.

There are two branches in this repository.

The branch that I work out of is [`main`](https://github.com/koddsson/cooking/tree/main) which includes Obsidian markdown formatted files. It also includes a github action to convert Obsidian WikiLinks to markdown links and then push that change to the `view` branch.

The default branch is [`view`](https://github.com/koddsson/cooking/tree/view) which is a build artifact from the github action run in `main`.

If you want to browse, you can start with checking out my articles on [[Food]] and [[Drinks]].