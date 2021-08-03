/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.blog.Blog', null, global);
goog.exportSymbol('proto.blog.BlogResponse', null, global);
goog.exportSymbol('proto.blog.CreateBlogRequest', null, global);
goog.exportSymbol('proto.blog.ListBlogRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog.Blog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.Blog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.blog.Blog.displayName = 'proto.blog.Blog';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blog.Blog.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.Blog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.Blog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.Blog.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    author: jspb.Message.getFieldWithDefault(msg, 2, ""),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog.Blog}
 */
proto.blog.Blog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.Blog;
  return proto.blog.Blog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.Blog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.Blog}
 */
proto.blog.Blog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog.Blog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.Blog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.Blog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.Blog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.blog.Blog.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.blog.Blog.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string author = 2;
 * @return {string}
 */
proto.blog.Blog.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.blog.Blog.prototype.setAuthor = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.blog.Blog.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.blog.Blog.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.blog.Blog.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.blog.Blog.prototype.setContent = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog.ListBlogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.ListBlogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.blog.ListBlogRequest.displayName = 'proto.blog.ListBlogRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blog.ListBlogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.ListBlogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.ListBlogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ListBlogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog.ListBlogRequest}
 */
proto.blog.ListBlogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.ListBlogRequest;
  return proto.blog.ListBlogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.ListBlogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.ListBlogRequest}
 */
proto.blog.ListBlogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog.ListBlogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.ListBlogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.ListBlogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.ListBlogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog.BlogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.BlogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.blog.BlogResponse.displayName = 'proto.blog.BlogResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blog.BlogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.BlogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.BlogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.BlogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog.BlogResponse}
 */
proto.blog.BlogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.BlogResponse;
  return proto.blog.BlogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.BlogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.BlogResponse}
 */
proto.blog.BlogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog.BlogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.BlogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.BlogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.BlogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.BlogResponse.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/** @param {?proto.blog.Blog|undefined} value */
proto.blog.BlogResponse.prototype.setBlog = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.blog.BlogResponse.prototype.clearBlog = function() {
  this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blog.BlogResponse.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog.CreateBlogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog.CreateBlogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.blog.CreateBlogRequest.displayName = 'proto.blog.CreateBlogRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blog.CreateBlogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blog.CreateBlogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog.CreateBlogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.CreateBlogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blog: (f = msg.getBlog()) && proto.blog.Blog.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog.CreateBlogRequest}
 */
proto.blog.CreateBlogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog.CreateBlogRequest;
  return proto.blog.CreateBlogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog.CreateBlogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog.CreateBlogRequest}
 */
proto.blog.CreateBlogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.blog.Blog;
      reader.readMessage(value,proto.blog.Blog.deserializeBinaryFromReader);
      msg.setBlog(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog.CreateBlogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog.CreateBlogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog.CreateBlogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog.CreateBlogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlog();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.blog.Blog.serializeBinaryToWriter
    );
  }
};


/**
 * optional Blog blog = 1;
 * @return {?proto.blog.Blog}
 */
proto.blog.CreateBlogRequest.prototype.getBlog = function() {
  return /** @type{?proto.blog.Blog} */ (
    jspb.Message.getWrapperField(this, proto.blog.Blog, 1));
};


/** @param {?proto.blog.Blog|undefined} value */
proto.blog.CreateBlogRequest.prototype.setBlog = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.blog.CreateBlogRequest.prototype.clearBlog = function() {
  this.setBlog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blog.CreateBlogRequest.prototype.hasBlog = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.blog);
