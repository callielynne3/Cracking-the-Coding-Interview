// hash table
var hashTable = function(){
  this.storage = [];
  this.buckets = 8;
  this.size = 0;
}

// hash 
hashTable.prototype.hash = function(str){
  var hash = 5381;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
  }
  return hash % this.buckets;
}

//insert
hashTable.prototype.insert = function(key, value){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    this.storage[index] = [];
    this.storage[index].push([key, value]);
    this.size++;
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        this.storage[index][i][1] = value;
        // this.resize();
        return;
      }
    }
    this.storage[index].push([key, value]);
    this.size++;
  }
  this.resize();

}

// resize insert
hashTable.prototype.resizeInsert = function(key, value){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    this.storage[index] = [];
    this.storage[index].push([key, value]);
    this.size++;
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        this.storage[index][i][1] = value;
        // this.resize();
        return;
      }
    }
    this.storage[index].push([key, value]);
    this.size++;
  }
  // this.resize();
}

// delete
hashTable.prototype.delete = function(key){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        var temp = this.storage[index][i][1];
        this.storage[index].splice(i, 1);
        this.size--;
        console.log(temp);
        this.resize();
        return temp;
      }
    }
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
  }
  this.resize();
}

// retrieve 
hashTable.prototype.retrieve = function(key){
  var index = this.hash(key);

  if (this.storage[index] === undefined){
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
    return null;
  } else {
    for (var i = 0; i < this.storage[index].length; i++){
      if (this.storage[index][i][0] === key){
        return this.storage[index][i][1];
      }
    }
    console.log('key ==> ' + key + ' <== does not exist in hashTable');
    }
}

// resize
hashTable.prototype.resize = function(){
  var allElements = [];
  if (this.size > (0.75 * this.buckets)){
    this.buckets *= 2;
    this.storage.forEach(function(bucket){
      if (bucket !== undefined){
        bucket.forEach(function(tuple){
          allElements.push(tuple);
        })
      }
    })

    this.storage = [];
    this.size = 0;

    allElements.forEach(function(tuple){
      this.resizeInsert(tuple[0], tuple[1]);
    }, this)
    console.log('HashTable has been doubled in size');
  } else if (this.buckets > 8 && this.size < (0.25 * this.buckets)){
    this.buckets *= 0.5;
    this.storage.forEach(function(bucket){
      if (bucket !== undefined){
        bucket.forEach(function(tuple){
          allElements.push(tuple);
        })
      }
    })
    this.storage = [];
    // this.size = 0;
    allElements.forEach(function(tuple){
      this.resizeInsert(tuple[0], tuple[1]);
    }, this)
    console.log('HashTable has been halved in size');
  }
}