using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using RecuPro.Data;
using System.Security.Cryptography;
using System.Text;
using System.Web.UI.HtmlControls;

public partial class Admin_CreateSubVendorTeam : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("SubVendorTeam"));
            li.Attributes["Class"] = "active";

            clsTbSub_Vendor SV = new clsTbSub_Vendor();
            DataTable dt = SV.SelectAll();
            ddlCompanyName.DataSource = dt;
            ddlCompanyName.DataTextField = "Company_Name";
            ddlCompanyName.DataValueField = "ID";
            ddlCompanyName.DataBind();
            ddlCompanyName.Items.Insert(0, "Select");

            Bind();
            if (string.IsNullOrEmpty(Request.QueryString["ID"]))
            {
                // Response.Redirect("~/Admin/CreateClient.aspx");
            }
            else
            {
                int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                clsTbSub_Vendor_Team SVT = new clsTbSub_Vendor_Team();
                SVT.iID = i;
                DataTable dt1 = SVT.SelectOneWIDLogic();

                if (dt1.Rows.Count > 0)
                {
                    ddlCompanyName.SelectedValue = dt1.Rows[0]["Sub_Vendor_ID"].ToString();
                    txtName.Text = dt1.Rows[0]["Name"].ToString();
                    ddlStatus.SelectedValue = dt1.Rows[0]["Status"].ToString();
                    ddlType.SelectedValue = dt1.Rows[0]["Type"].ToString();
                    txtEmail.Text = dt1.Rows[0]["Email"].ToString();
                    txtPrimaryPhone.Text = dt1.Rows[0]["Primary_Phone"].ToString();
                    txtSecondaryPhone.Text = dt1.Rows[0]["Secondary_Phone"].ToString();
                    txtLocation.Text = dt1.Rows[0]["Location"].ToString();
                    txtAddress_Line1.Text = dt1.Rows[0]["Address_Line1"].ToString();
                    txtAddress_Line2.Text = dt1.Rows[0]["Address_Line2"].ToString();
                    txtCity.Text = dt1.Rows[0]["City"].ToString();
                    txtState.Text = dt1.Rows[0]["State"].ToString();
                    txtZIP.Text = dt1.Rows[0]["Zip"].ToString();
                    txtCountry.Text = dt1.Rows[0]["Country"].ToString();

                }
            }

        }

    }
    private void Bind()
    {
        clsTbSub_Vendor_Team SVT = new clsTbSub_Vendor_Team();
        //SVT.iSub_Vendor_ID = Convert.ToInt32(ddlCompanyName.SelectedValue.ToString());
        DataTable dt = SVT.SelectAll();
        gvClientsList.DataSource = dt;
        gvClientsList.DataBind();
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        if (ddlCompanyName.Text == "Select" || txtName.Text == "")
        { lblerr.Text = "* Marked fields are Compulsory"; }
        else
        {
            clsTbSub_Vendor_Team SVT = new clsTbSub_Vendor_Team();
            SVT.sName = txtName.Text.Trim();
            SVT.iSub_Vendor_ID = Convert.ToInt32(ddlCompanyName.SelectedValue.ToString());
            SVT.sStatus = ddlStatus.SelectedValue.ToString();
            SVT.sType = ddlType.SelectedValue.ToString();
            SVT.sEmail = txtEmail.Text.Trim();
            SVT.sPrimary_Phone = txtPrimaryPhone.Text.Trim();
            SVT.sSecondary_Phone = txtSecondaryPhone.Text.Trim();
            SVT.sLocation = txtLocation.Text.Trim();
            SVT.sAddress_Line1 = txtAddress_Line1.Text.Trim();
            SVT.sAddress_Line2 = txtAddress_Line2.Text.Trim();
            SVT.sCity = txtCity.Text.Trim();
            SVT.sState = txtState.Text.Trim();
            SVT.sZip = txtZIP.Text.Trim();
            SVT.sCountry = txtCountry.Text.Trim();

            if (string.IsNullOrEmpty(Request.QueryString["ID"]))
            {
                SVT.daCDate = Convert.ToDateTime(DateTime.Now);
                SVT.sCPerson = Session["UserName"].ToString();
                SVT.Insert();
                lblerr.Text = "Successfully Registered";
                Bind();
            }
            else
            {
                int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                SVT.iID = i;
                SVT.Update();
                lblerr.Text = "Updated Successfully";
                Bind();
            }
            txtName.Text = "";
            txtEmail.Text = "";
            txtPrimaryPhone.Text = "";
            txtSecondaryPhone.Text = "";
            txtLocation.Text = "";
            txtAddress_Line1.Text = "";
            txtAddress_Line2.Text = "";
            txtCity.Text = "";
            txtState.Text = "";
            txtZIP.Text = "";
            txtCountry.Text = "";
        }
    }
}