/**
 * 
 */
/*
 * onmousemove onclick onmouseenter onmouseleave onmouseover onmouseout
 */

function openColorEdit(element)
{
    var brk = '';
    var parent = element;
    while (parent.nodeName !== 'DIV')
    {
        parent = parent.parentElement;
    }
    if (typeof parent.parent === 'undefined')
    {
        parent.colordialog = new colorEditElement(parent);
        if (typeof parent.colordialog === 'undefined')
        {
            return;
        }
    }
    var theObject = parent.colordialog;
    try
    {

        if (theObject.element.childElementCount == 0)
        {
            var test;
            parent.colordialog = test;
            // var theClose = theObject.close;
            // parent.removeAttribute('colordialog', theObject);
            openColorEdit(element);
        }
    }
    catch (e)
    {
        brk = e;
    }
}

function colorEditElement(element)
{
    var brk = '';
    try
    {
        this.parent = element.parentElement;
        this.zindex = 1;
        var pstyle = window.getComputedStyle(this.parent);
        if (Number.isInteger(parseInt(pstyle.getPropertyValue('z-index'))))
        {
            this.zindex += parseInt(pstyle.getPropertyValue('z-index'));
        }
        this.functions =
            {
                close : function(event)
                {
                    var brk = '';
                    var event = event || window.event;

                    try
                    {
                        var parent = this.parentElement;
                        parent.removeChild(this);
                        if (typeof parent.class !== 'undefined')
                        {
                            while (parent != null)
                            {

                                var nextparent = null;
                                if (typeof parent.colordialog !== 'undefined')
                                {
                                    parent.removeAttribute('colordialog');
                                }
                                var classString = parent.class;
                                if (typeof classString !== 'undefined' && classString.length > 0)
                                {
                                    var clases = classString.split(' ');
                                    if (clases.length === 0)
                                        clases.push(classString);
                                    while (nextparent == null && clases.length > 0)
                                    {
                                        var poped = clases.pop();
                                        if (poped == 'colordialog')
                                        {
                                            if (typeof parent.parentElement !== 'undefined')
                                            {
                                                nextparent = parent.parentElement;
                                                nextparent.removeChild(parent);
                                                brk = poped;

                                            }
                                        }
                                        brk = poped;
                                    }
                                }
                                parent = nextparent;
                            }

                        }
                        var me = this;
                        this.removeAttribute('colordialog', this);

                    }
                    catch (e)
                    {
                        brk = e;
                    }
                }
            };

    }
    catch (e)
    {
        brk = e;
    }
    for ( var k in this.functions)
        this[k] = this.functions[k];

    try
    {

        this.element = document.createElement("DIV");
        this.element.style.position = 'absolute';
        this.element.top = 0;
        this.element.left = 0;
        this.element.innerHTML = 'hallo div vi prøver lige at se om den folder';
        this.element.zindex = this.xindex;
        this.element.class = 'colordialog';
        this.img = document.createElement("IMG");
        this.img.style = 'width:' + 300 + 'px;height:' + 300 + 'px;';
        var imgfile = new svg_colorscrollbar(this.img);
        this.img.image = imgfile;
        this.img.class = 'colordialog';
        this.img.src = imgfile.getsrc();
        var svg = imgfile.file;
        var click = imgfile.mouseclick;
        this.img.onclick = imgfile.mouseclick;
        this.element.appendChild(this.img);

        var clases = this.element.class.split(' ');
        this.closer = document.createElement("INPUT");
        this.closer.setAttribute("type", "button");
        this.closer.value = 'Luk';
        // this.closer.addEventListener("click", this.close());
        var closerstyle = 'position:relative;z-index:1;';
        this.closer.style = closerstyle;
        this.closer.class = 'colordialog';
        this.element.appendChild(this.closer);
        var lastpos = this.parent;
        var poselm = lastpos;
        while (poselm != null)
        {

            var nextparent = null;
            while (poselm.nodeName === 'TBODY')
            {
                poselm = poselm.parentElement;
            }
            try
            {
                var clases = poselm.classList;
                for (var i = 0; nextparent == null && i < clases.length; i++)
                {
                    var poped = clases[i];
                    if (poped == 'colordialog')
                    {
                        if (typeof poselm.parentElement !== 'undefined')
                        {
                            nextparent = poselm.parentElement;
                            brk = poped;

                        }
                    }
                    brk = poped;
                }
            }
            catch (e)
            {
                brk = e;
            }
            if (nextparent != null)
            {
                lastpos = nextparent;
            }
            poselm = nextparent;
        }
        var attributes = new Attributes(this.element);
        var styles = attributes.style;
        styles += 'z-index:1;top:' + (0 + this.parent.offsetParent.offsetTop + 0 + this.parent.offsetTop) + 'px;left:'
                + (0 + this.parent.offsetParent.offsetLeft + 0 + this.parent.offsetLeft) + 'px;background-color:#FFFFFF;';
        this.element.style = styles;
        if (lastpos.childNodes.length > 0)
        {
            lastpos.insertBefore(this.element, lastpos.childNodes[0]);
        }
        else
        {
            lastpos.appendChild(this.element);

        }
        this.closer.style.visibility = 'visible';
        this.closer.onclick = this.close;
    }
    catch (e)
    {
        brk = e;
    }
    return this;
}