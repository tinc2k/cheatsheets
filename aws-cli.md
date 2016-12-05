# aws-cli

## install

* get from https://aws.amazon.com/cli/

```
aws configure

```

## s3

```
## calculate bucket size [size, length]
aws s3api list-objects --bucket BUCKET_NAME --output json --query "[sum(Contents[].Size), length(Contents[])]"
## bucket summary
aws s3 ls --summarize --human-readable --recursive BUCKET_NAME
```



## references

* http://docs.aws.amazon.com/cli/latest/reference/
* http://serverfault.com/questions/84815/how-can-i-get-the-size-of-an-amazon-s3-bucket
