/**
 * 
 */

function getStringFromElement(attributes, name)
{
    retval;
    try
    {
        if (typeof attributes[name] !== 'undefined')
        {
            retval = attributes[name].toString().toLowerCase().trim();
        }
        else
        {
            retval = attributes.style[name].toString().toLowerCase().trim();
        }
    }
    catch (e)
    {

    }
    return retval;
}

var basicsvg = '<svg width="100" height="10"   xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" '
        + ' xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" '
        + ' xmlns:svg="http://www.w3.org/2000/svg"'
        + ' xmlns="http://www.w3.org/2000/svg" >'
        + '<defs>'
        + '<linearGradient id="Gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">'
        + '<stop offset="0%" style="stop-color:rgb();stop-opacity:1" />'
        + '<stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" />'
        + '</linearGradient>'
        + '</defs>'
        + '<rect x="0" y="0" width="100" height="10" fill= "url(#Gradient-1)" stroke-width="0px" />' + '</svg>';

// var marker =

function svg_colorscrollbar(element, angle, basecolor)
{
    var brk = '';
    var style = element.style;
    this.height = element.style.height;// element.offsetHeight;
    this.width = element.style.width;// element.offsetWidth;
    this.functions =
        {
            mousemove : function(event)
            {
                event = event || window.event;
                brk = event;
            },
            mouseclick : function(event)
            {
                event = event || window.event;
                brk = event;

            },
            mouseenter : function(event)
            {
                event = event || window.event;
                brk = event;

            },
            mouseleave : function(event)
            {
                event = event || window.event;
                brk = event;

            },
            mouseover : function(event)
            {
                event = event || window.event;
                brk = event;

            },
            mouseout : function(event)
            {
                event = event || window.event;
                brk = event;

            },

            getsrc : function()
            {
                return 'data:image/svg+xml;base64,' + this.base64;
            }

        };
    for ( var k in this.functions)
        this[k] = this.functions[k];
    try
    {
        var strdef = 'r:255,0,0;g:0,255;b:0,0,255;'.split(';');
        var theColor = null;
        if (typeof basecolor !== 'undefined' && basecolor !== null)
        {
            while (theColor == null && strdef.length > 0)
            {
                var dat = strdef.pop().split(':');
                if (dat[0] == basecolor.toLowerCase().trim())
                {
                    theColor = dat[1];
                }
            }
        }
        if (theColor == null)
            theColor = '0,0,0';
        var thevmlDoc = basicsvg;
        var oParser = new DOMParser();
        var xmlDoc = oParser.parseFromString(basicsvg, "text/xml");
        xmlDoc.documentElement.setAttribute("width", this.width.toString());
        xmlDoc.documentElement.setAttribute('height', this.height.toString());
        var children = xmlDoc.documentElement.childNodes;
        var found = null;
        for (var i = 0; found == null && i < children.length; i++)
        {
            if (children[i].tagName == 'rect')
            {
                found = children[i];
                found.setAttribute("width", this.width.toString());
                found.setAttribute('height', this.height.toString());
            }
        }
        found = null;
        for (var i = 0; found == null && i < children.length; i++)
        {
            if (children[i].tagName == 'defs')
            {
                children = children[i].childNodes;
                for (i = 0; found == null && i < children.length; i++)
                {
                    if (children[i].tagName == 'linearGradient')
                    {
                        children = children[i].childNodes;
                        for (i = 0; found == null && i < children.length; i++)
                        {
                            if (children[i].tagName == 'stop' && children[i].getAttribute('offset') == '0%')
                            {
                                found = children[i];
                                found.setAttribute('style', 'stop-color:rgb(' + theColor + ');stop-opacity:1');
                            }
                        }
                    }

                }
            }
        }
        var oSerializer = new XMLSerializer();
        this.file = oSerializer.serializeToString(xmlDoc);
        this.base64 = window.btoa(this.file);
    }
    catch (e)
    {
        brk = e;
    }
    return this;
    // var src = filepath + ',' + base64;
}