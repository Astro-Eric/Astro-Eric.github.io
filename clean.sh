#!/bin/bash

folder="./images/Yili"   # or replace with your folder path

for f in "$folder"/*; do
  base=$(basename "$f")
  
  # Remove " copy" only if it appears before the extension
  newname=$(echo "$base" | sed 's/ copy\(\.[^.]*\)$/\1/')
  
  if [[ "$base" != "$newname" ]]; then
    mv "$folder/$base" "$folder/$newname"
    echo "Renamed: $base → $newname"
  fi
done
