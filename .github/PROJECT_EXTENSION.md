# Project Extension

There are two ways to extend the [Firefly Semantics Github Flow Documentation Project](https://github.com/fireflysemantics/fs-github-flow-docs-starter).  We can keep all the git commit history or start with a brand new commit history.

In order to illustrate the process lets assume that we have already created a new unitialized repository called example.  We could do that with the Github CLI like this.

```
gh repo create example --public
```

The Git respository URL for this new repository is:

```
git@github.com:fireflysemantics/example.git
```

If we want to keep all the starter commit history we can clone the starter project and update the remote like this.
```
git clone git@github.com:fireflysemantics/fs-github-flow-docs-starter
cd fs-github-flow-docs-starter
git remote set-url origin git@github.com:fireflysemantics/example.git
git push
```

The `example` repository is now a mirror of the starter project.

If you want a clean repository then delete the `.git` folder and reinitialize git like this.

```
git clone git@github.com:fireflysemantics/fs-github-flow-docs-starter
cd fs-github-flow-docs-starter
rm -fr .git
git init
git remote add origin git@github.com:fireflysemantics/example.git
git add . && git commit -m "chore: initialize project using fs-github-flow-docs-starter files as a baseline"
```