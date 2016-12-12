/**
 * 
 */

/**
 * 
 * 
 * 
 * @param element
 */
function Attributes(element)
{
    var functions =
        {
            set : function(name, value)
            {
                var brk = name;
                brk = value;
            },
        }
    var attributes = element.attributes;
    if (typeof attributes == "undefined")
    {
        attributes = element;
    }
    this.attributes = attributes;
    var attrlen = attributes.length;
    for ( var k in attributes)
    {
        this[attributes[k].name] = attributes[k].value;
    }
    for ( var k in functions)
        this[k] = functions[k];
    return this;
}

function Attributesfroma(attributes)
{
    var length = attributes.length;
    for (var i = 0; i < attributes.length; i++)
    {
        var attrb = attributes[i];
        this[attributes[i].name] = attributes[i].value;
    }
}

function IntervalHandler(interval, list, test, reply)
{
    if (typeof interval != 'undefined' && interval > 20 && typeof list != 'undefined' && list != null
            && typeof list[0] != interval != 'undefined')
    {
        thist.list = list;

    }
}

function CssFormat(element)
{
    var functions =
        {
            toString : function()
            {
                var retval = '';
                var probs = Object.getOwnPropertyNames(this);
                for (var i = 0; i < probs.length; i++)
                {
                    var prop = probs[i];
                    var org = this.orgdata['' + prop];
                    if (typeof this.orgdata[probs[i]] == "undefined")
                    {
                        var pname = '' + probs[i];
                        pname = pname.trim();
                        var val = '' + this['' + pname];
                        val = val.trim();
                        if (typeof pname != "undefined" && pname.length > 0 && typeof val != "undefined" && val.length > 0)
                        {
                            retval += '' + pname + ':' + val + ';'
                            var dat = val;
                        }
                    }
                }
                if (this.callerreceive && retval.length > 0)
                {
                    this.caller.style = retval;
                }
                return retval;
            }

        };
    if (typeof element.style != "undefined")
    {
        this.caller = element;
        this.callerreceive = true;
        this.style = element.style;
    }
    else
    {
        this.style = element;
    }
    var css = [];
    if (typeof this.style == "string")
    {
        var list = this.style.split(';');
        for (var i = 0; i < list.length; i++)
        {
            var ent = list[i].split(':');
            var name = '' + ent[0];
            var value = '' + ent[1];
            var thetag =
                {
                    "name" : name,
                    "value" : value
                };
            css.push(thetag);
        }
    }
    else
    {
        if (typeof this.style != "undefined")
        {
            for (var i = 0; i < this.style.length; i++)
            {
                var thetag;
                if (typeof this.style[i].name != "undefined" && typeof this.style[i].value != "undefined")
                {
                    thetag.name = this.style[i].name;
                    thetag.value = this.style[i], value;
                    css.push(thetag);
                }
            }
        }
        if (css.length == 0)
        {
            this.style = '';
        }
    }
    if (true == false)
    {
        for ( var k in this.css)
            this[k] = this.css[k];
    }
    for ( var k in functions)
        this[k] = functions[k];
    this.orgdata = [];
    var orgData = Object.getOwnPropertyNames(this);
    for (var i = 0; i < orgData.length; i++)
    {
        var name = orgData[i];
        var val = this['' + name];
        this.orgdata['' + orgData[i]] = '' + orgData[i];
        var dat = val;
    }
    for (var i = 0; i < css.length; i++)
    {
        var cssdat = css[i];
        if (typeof cssdat.name != "undefined" && typeof cssdat.value != "undefined")
        {
            this[cssdat.name.trim()] = cssdat.value.trim();

        }
    }
    return this;

    /*
     * this.prototype= for ( var k in prototype)
     * 
     * this.prototype[k] = prototype[k];
     */
}

function CssScanner(options)
{
    var functions =
        {
            scancss : function(options)
            {
                var dbg = 'hallo';
                var retval = [];
                try
                {
                    var cssfiles = document.getElementsByTagName("style");
                    for (i = 0; i < cssfiles.length; i++)
                    {
                        var file = cssfiles[i];
                        var attributes = new Attributes(file);
                        if (typeof attributes.type != 'undefined' && attributes.type == 'text/css')
                        {
                            var nodelists = file.childNodes;
                            for (n = 0; n < nodelists.length; n++)
                            {
                                var dat = nodelists[n].data;
                                var uri = file.baseURI;
                                var pair = [];
                                pair[0] = 'name';
                                pair['name'] = [];
                                pair['name'][0] = 'value';
                                pair['name']['value'] = [];
                                pair['name']['value'][0] = 'value';
                                pair['name']['value']['value'] = '' + dat;
                                pair['name'][1] = 'baseURI';
                                pair['name']['baseURI'] = '' + uri;
                                var test = pair.name;
                                test = pair.name.baseURI;
                                test = pair.name.value.value;

                                retval.push(pair);
                                dbg = nodelists;
                            }
                            dbg = nodelists;
                        }
                        dbq = file;
                    }
                }
                catch (e)
                {
                    dbq = e;
                }
                return retval;
            }
        };
    for ( var k in functions)
        this[k] = functions[k];
}
