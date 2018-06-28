using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;

public partial class Admin_Home : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("Home"));
        li.Attributes["Class"] = "active";
    }
}