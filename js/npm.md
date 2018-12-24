# npm


```
# list local or global packages
npm list [-g]

# list single package w/ dependency tree
npm list {package}

# update package
npm update [-g] {package}

# update npm
npm install npm@latest -g

# check installed npm version
npm -v
```


## packages

### sloc

```
# count lines in current folder, exclude multiple folders from count
sloc --defails -e ".git|.idea|.vscode|backup|build|certificates|logs|node_modules|static" .
```

## refs

* https://docs.npmjs.com/cli/update
* http://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package