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

public partial class Admin_CreateSubVendor : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("SubVendor"));
            li.Attributes["Class"] = "active";
            li.Attributes["display"] = "block";

            Bind();
            if (string.IsNullOrEmpty(Request.QueryString["ID"]))
            {
                // Response.Redirect("~/Admin/CreateClient.aspx");
            }
            else
            {
                int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                clsTbSub_Vendor SV = new clsTbSub_Vendor();
                SV.iID = i;
                DataTable dt = SV.SelectOneWIDLogic();

                if (dt.Rows.Count > 0)
                {
                    txtCompanyName.Text = dt.Rows[0]["Company_Name"].ToString();
                    ddlStatus.SelectedValue = dt.Rows[0]["Status"].ToString();
                    txtEmail.Text = dt.Rows[0]["Email"].ToString();
                    txtPrimaryPhone.Text = dt.Rows[0]["Primary_Phone"].ToString();
                    txtSecondaryPhone.Text = dt.Rows[0]["Secondary_Phone"].ToString();
                    txtLocation.Text = dt.Rows[0]["Location"].ToString();
                    txtAddress_Line1.Text = dt.Rows[0]["Address_Line1"].ToString();
                    txtAddress_Line2.Text = dt.Rows[0]["Address_Line2"].ToString();
                    txtCity.Text = dt.Rows[0]["City"].ToString();
                    txtState.Text = dt.Rows[0]["State"].ToString();
                    txtZIP.Text = dt.Rows[0]["Zip"].ToString();
                    txtCountry.Text = dt.Rows[0]["Country"].ToString();
                    txtWebsite.Text = dt.Rows[0]["Website"].ToString();
                }
            }
        }

    }
    private void Bind()
    {
        clsTbSub_Vendor SV = new clsTbSub_Vendor();
        DataTable dt = SV.SelectAll();
        gvClientsList.DataSource = dt;
        gvClientsList.DataBind();
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        if (txtCompanyName.Text == "")
        { lblerr.Text = "* Marked Fields are Compulsory"; }
        else
        {
            clsTbSub_Vendor SV = new clsTbSub_Vendor();
            SV.sCompany_Name = txtCompanyName.Text.Trim();
            SV.sStatus = ddlStatus.SelectedValue.ToString();
            SV.sEmail = txtEmail.Text.Trim();
            SV.sPrimary_Phone = txtPrimaryPhone.Text.Trim();
            SV.sSecondary_Phone = txtSecondaryPhone.Text.Trim();
            SV.sLocation = txtLocation.Text.Trim();
            SV.sAddress_Line1 = txtAddress_Line1.Text.Trim();
            SV.sAddress_Line2 = txtAddress_Line2.Text.Trim();
            SV.sCity = txtCity.Text.Trim();
            SV.sState = txtState.Text.Trim();
            SV.sZip = txtZIP.Text.Trim();
            SV.sCountry = txtCountry.Text.Trim();
            SV.sWebSite = txtWebsite.Text.Trim();
           
            if (string.IsNullOrEmpty(Request.QueryString["ID"]))
            {
                SV.daCDate = Convert.ToDateTime(DateTime.Now);
                SV.sCPerson = Session["UserName"].ToString();
                SV.Insert();
                lblerr.Text = "Successfully Registered";
                Bind();
            }
            else
            {
                int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                SV.iID = i;
                SV.Update();
                lblerr.Text = "Updated Successfully";
                Bind();
            }
            txtCompanyName.Text = "";
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
            txtWebsite.Text = "";


        }
    }
}