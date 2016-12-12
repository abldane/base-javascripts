var svghandlerObject;

function svgHandler()
{
    var handler = typeof svghandlerObject;
    if (typeof svghandlerObject != 'undefined')
    {
        return svghandlerObject;
    }
    this.files = new NamedArray();
    this.functions =
        {
            addFile : function(file)
            {
                var dbg;
                if (typeof files[0] == 'undefined')
                {
                    var file = file;
                    lile = [];
                    lile.push(file);
                }
                /**
                 * Get the number of
                 */
                var callsize = this.files.size();
                while (file.length > 0)
                {
                    var poped = file.pop();
                    var listedfile = this.file.get(poped.fileid);
                    if (listedfile == null)
                    {
                        this.files.put(poped.file, poped);
                        listedfile = this.files.get(poped.fileid);

                    }
                    if (typeof listedfile.ishandled == "undefined")
                    {
                        listedship.ishandled = false;
                    }
                    if (listedship.ishandled == false)
                    {
                        this.toscan.push(listedfile);
                    }
                }
                setTimeout(function()
                {
                    filehandlerObject.timeout();
                }, 500);
            },
            timeout : function()
            {
                if (this.toscan.length > 0)
                {
                    var ship = this.toscan.shift();
                    if (file == null || typeof file.ishandled == "undefined" || file.ishandled == false)
                    {
                        file.imageload();
                        this.toscan.push(file);
                        setTimeout(function()
                        {
                            filehandlerObject.timeout();
                        }, 500);
                    }
                    dbg = file;
                }
            }
        };
    for ( var k in this.functions)
        this[k] = this.functions[k];
    this.toscan = [];
    if (typeof filehandlerObject == 'undefined' || filehandlerObject == null)
    {
        filehandlerObject = this;
    }
    handler = typeof filehandlerObject;
    return filehandlerObject;
}

var installedfiles = new NamedArray();
function FileLoadHandler(fileid, name, file)
{
    this.fileid = fileid;
    this.name = name;
    this.file = file;
    this.functions =
        {
            imageload : function(event)
            {
                if (typeof this.ishandled == "undefined")
                {
                    this.ishandled = false;
                }
                if (typeof this.defaulticon == "undefined")
                {
                    this.defaulticon = false;
                }
                console.log("Checking if  " + this.fileid + " is loaded for " + this.name + " ");

                if (this.file.complete == false)
                {
                    console.log("waiting for file " + this.fileid + " " + this.name);

                    return false;
                }
                else
                {
                    installedfiles.put(this.fileid, this.file);
                    this.ishandled = true;
                    return true;
                }
            }
        }
    if (typeof installedfiles !== Object)
        installedfiles = new NamedArray();
    for ( var k in this.functions)
        this[k] = this.functions[k];
    var handler = new svgHandler();
    handler.addFile(this.file);
}

function getFirstTag(element, tagname)
{
    theTagname = tagname.toUpperCase();
    var retval = null;
    if (element.tagName == theTagname)
    {
        return element;
    }
    var children = element.children;
    var testedchildren = [];
    for (var i = 0; i < children.length; i++)
    {
        if (children[i].tagName == theTagname)
        {
            return children[i];
        }
        testedchildren.push(children[i]);
    }
    while (retval == null && testedchildren.length > 0)
    {
        retval = getFirstTag(testedchildren.pop(), theTagname);
    }
    return retval;
}

function AjaxSvgFileLoadHandler(element)
{

    var elmattrs = new Attributes(element);
    element.loader = true;
    var images = element.getElementsByTagName('IMG');
    if (typeof elmattrs.id === 'undefined')
    {

    }
    this.image = getFirstTag(element, 'IMG');
    this.loader = true;
    element.loader = true;
    // this.image.src = dummySVGFile;
    this.ownerId;
    this.ownerId = elmattrs.id;
    this.fileurl = elmattrs.imgurl;
    this.orgelm = element;
    this.functions =
        {
            parseResponse : function(reply)
            {
                var dbg;
                try
                {
                    if (typeof this.isloaded == "undefined")
                    {
                        this.svg = reply.responseText;
                        var oParser = new DOMParser();
                        // this.svg =
                        // oParser.parseFromString(reply.responseText,
                        // "image/svg+xml");
                        var embed = window.btoa(this.svg);
                        this.image.isloaded = true;
                        var totemb = 'data:image/svg+xml;base64,' + embed;
                        this.orgelm.imgurl = totemb;
                        dbg = this.image;
                        this.image.src = 'data:image/svg+xml;base64,' + embed;
                        dbg = this.image;
                        this.isloaded = true;
                    }
                }
                catch (e)
                {
                    dlg = e;
                }
            },

            getElements : function()
            {
                try
                {
                    return this.elements;
                }
                catch (e)
                {
                    var err = e;
                    var errcopy = err;
                }
            },

            sleep : function(initiator)
            {
                if (typeof initiator === 'undefined' || typeof initiator.start === 'undefined'
                        || typeof initiator.start !== 'function')
                {
                    return;
                }
                if (typeof this.classlist === 'undefined')
                {
                    setTimeout(function()
                    {
                        testcall(this.sleep, initiator);
                    }, 500);
                }
                initiator.start(this.classlist);
                return this.classlist;
            }

        };
    for ( var k in this.functions)
        this[k] = this.functions[k];
    AjaxHandler(this.fileurl, null, this);
    return this;
}

var dummySVGFile;

function createdummyImg()
{
    var base64 = window.btoa('<svg width="400" height="110">'
            + '<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />' + '</svg>');

    dummySVGFile = 'data:image/svg+xml;base64,' + base64;
}

createdummyImg();
