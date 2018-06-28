using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RecuPro.Data;
using System.Data;
using System.Text;
using System.Web.UI.HtmlControls;

public partial class Admin_AssignUsers : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("AssignUser"));
            li.Attributes["Class"] = "active";
            li.Attributes["display"] = "block";


            LoadManagerRoles();
            LoadGrid();
        }
    }
    public void LoadGrid()
    {
        clsTbUser_Hierarchy UserH = new clsTbUser_Hierarchy();
        DataTable dt = UserH.SelectAll();
        gvAssignedList.DataSource = dt;
        gvAssignedList.DataBind();
    }
    public void LoadManagerRoles()
    {
        clsTbUser User = new clsTbUser();
        DataTable dt = User.GetRoles();

        if (dt.Rows.Count > 0)
        {
            ddlManagerRole.DataSource = dt;
            ddlManagerRole.DataTextField = "Role";
            ddlManagerRole.DataBind();
        }
        ddlManagerRole.Items.Insert(0, "Select");

    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        if (ddlManagerRole.SelectedValue.ToString() == "Select" || ddlEmployeeRole.SelectedValue.ToString() == "Select" || ddlManager.SelectedValue.ToString() == "Select" || ddlEmployee.SelectedValue.ToString() == "Select")
        {
            lblerr.Text = "Please Select to Assign";
        }
        else
        {
            clsTbUser_Hierarchy UserH = new clsTbUser_Hierarchy();
            UserH.iManager_ID = Convert.ToInt32( ddlManager.SelectedValue.ToString());
            UserH.sUser_Role = ddlEmployeeRole.SelectedValue.ToString();
            UserH.iUser_Role_Code = 0;
            UserH.iBase_User_ID = Convert.ToInt32(ddlEmployee.SelectedValue.ToString());
            UserH.Insert();
            lblerr.Text = "Assigned Successfully";

            LoadManagerRoles();

            ddlEmployee.Items.Clear();
            ddlEmployeeRole.Items.Clear();
            ddlManager.Items.Clear();

            LoadGrid();
        }
    }
    protected void ddlManagerRole_SelectedIndexChanged(object sender, EventArgs e)
    {
        lblerr.Text = "";
        clsTbUser User = new clsTbUser();
        User.sRole = ddlManagerRole.SelectedValue.ToString();
        DataTable dt = User.GetDataByRoles();
        DataTable dt1 = User.GetRoles4Employees();

        if (dt.Rows.Count > 0)
        {
            ddlManager.DataSource = dt;
            ddlManager.DataTextField = "User_Name";
            ddlManager.DataValueField = "ID";
            ddlManager.DataBind();
        }
        ddlManager.Items.Insert(0, "Select");

        if (dt1.Rows.Count > 0)
        {
            ddlEmployeeRole.DataSource = dt1;
            ddlEmployeeRole.DataTextField = "Role";
            ddlEmployeeRole.DataBind();
        }
        ddlEmployeeRole.Items.Insert(0, "Select");

    }
    protected void ddlEmployeeRole_SelectedIndexChanged(object sender, EventArgs e)
    {
        clsTbUser User = new clsTbUser();
        User.sRole = ddlEmployeeRole.SelectedValue.ToString();
        DataTable dt = User.GetDataByRoles();
        
        if (dt.Rows.Count > 0)
        {
            ddlEmployee.DataSource = dt;
            ddlEmployee.DataTextField = "User_Name";
            ddlEmployee.DataValueField = "ID";
            ddlEmployee.DataBind();
        }
        ddlEmployee.Items.Insert(0, "Select");
    }
}