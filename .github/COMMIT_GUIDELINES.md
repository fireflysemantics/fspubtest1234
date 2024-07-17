# Commit Message Header

In addition to the guidelines that provided by the [Conventional Commits Specification][conventional-commits] for the commit header `description`:
-  use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end of the `description

# Commit Message Body

Just as in the summary / header, use the imperative, present tense: "fix" not "fixed" nor "fixes".

The body can be used to explain the motivation for the change, anything that was particularly challenging with respect to making the change, and can include tasks specifics that would be helpful to know about if anyone wants to repeat the step / task performing in creating the content that is being committed.  

The body can also include a comparison of previous to new behavior.

# Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, and other PRs that this commit closes or is related to. For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```
or
```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>
```
Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.

# Revert Commits

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit.

The content of the commit message body should contain:
- information about the SHA of the commit being reverted in the following format: This reverts commit <SHA>
- a clear description of the reason for reverting the commit message

# Additional Commit Notes

From the [Github Flow][github-flow] Documentation:

> Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach. For example, if you want to rename a variable and add some tests, put the variable rename in one commit and the tests in another commit. Later, if you want to keep the tests but revert the variable rename, you can revert the specific commit that contained the variable rename. If you put the variable rename and tests in the same commit or spread the variable rename across multiple commits, you would spend more effort reverting your changes.

Focus each commit on a task that addresses a specific context or concern.  

For example `feat: add contribution guidelines to the project` could be a good commit message for adding the `COMMIT_GUIDELINES.md` document.  

[github-flow]: https://docs.github.com/en/get-started/using-github/github-flow
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
