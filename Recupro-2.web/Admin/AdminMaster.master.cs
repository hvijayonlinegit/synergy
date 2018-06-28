using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_AdminMaster : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (HttpContext.Current.Session["UserName"] == null)
        {
            Response.Redirect("~/index.aspx");
        }
        else
        {
            lblUser.Text = Session["UserName"].ToString();
        }
    }
    protected void btnLogout_Click(object sender, EventArgs e)
    {
        Session.Abandon();
        Response.Redirect("~/index.aspx");
    }
}
