# aws-cli

## install

* windows: get from https://aws.amazon.com/cli/
* debian: `apt-get install awscli`

```
aws configure
```

## s3

```
## calculate bucket size [size, length]
aws s3api list-objects --bucket BUCKET_NAME --output json --query "[sum(Contents[].Size), length(Contents[])]"

## bucket summary
aws s3 ls --summarize --human-readable --recursive BUCKET_NAME

# get last modified object
# http://docs.aws.amazon.com/cli/latest/reference/s3/cp.html
# http://stackoverflow.com/questions/31062365/get-last-modified-object-from-s3-cli
```



## references

* http://docs.aws.amazon.com/cli/latest/reference/
* http://serverfault.com/questions/84815/how-can-i-get-the-size-of-an-amazon-s3-bucket
* https://packages.debian.org/jessie/admin/awscli