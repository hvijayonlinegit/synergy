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

public partial class Admin_CreateClientTeam : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        //HtmlGenericControl lic = (HtmlGenericControl)(Page.Master.FindControl("ClientManagement"));
        //lic.Attributes["Class"] = "open";

        HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("CCTeam"));
        li.Attributes["Class"] = "active";

        clsTbClient Client = new clsTbClient();
        DataTable dt = Client.SelectAll();
        ddlClientName.DataSource = dt;
        ddlClientName.DataTextField = "Name";
        ddlClientName.DataValueField = "ID";
        ddlClientName.DataBind();

        Bind();
        if (string.IsNullOrEmpty(Request.QueryString["ID"]))
        {
            // Response.Redirect("~/Admin/CreateClient.aspx");
        }
        else
        {
            int i = Convert.ToInt32(Request.QueryString["id"].ToString());
            clsTbClient_Team ClientTeam = new clsTbClient_Team();
            ClientTeam.iID = i;
            DataTable dt1 = ClientTeam.SelectOneWIDLogic();

            if (dt1.Rows.Count > 0)
            {
                txtName.Text = dt1.Rows[0]["Name"].ToString();
                ddlStatus.SelectedValue = dt1.Rows[0]["Status"].ToString();
                ddlRole_Level.SelectedValue = dt1.Rows[0]["Role"].ToString();
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
                ddlClientName.SelectedValue = dt1.Rows[0]["Client_ID"].ToString();

                txtUserName.Text = "";
                txtPassword.Text = "";
                txtUserName.Enabled = false;
                txtPassword.Enabled = false;
            }
        }

    }
    private void Bind()
    {
        clsTbClient_Team Client = new clsTbClient_Team();
        DataTable dt = Client.SelectAll();
        gvClientsList.DataSource = dt;
        gvClientsList.DataBind();
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        
            clsTbUser User = new clsTbUser();
            clsTbClient_Team CTeam = new clsTbClient_Team();
            CTeam.iClient_ID = Convert.ToInt32(ddlClientName.SelectedValue.ToString());
            CTeam.sName = txtName.Text.Trim();
            CTeam.sState = ddlStatus.SelectedItem.ToString();
            CTeam.sRole = ddlClientRole.SelectedItem.ToString();
            CTeam.sEmail = txtEmail.Text.Trim();
            CTeam.sPrimary_Phone = txtPrimaryPhone.Text.Trim();
            CTeam.sSecondary_Phone = txtSecondaryPhone.Text.Trim();
            CTeam.sLocation = txtLocation.Text.Trim();
            CTeam.sAddress_Line1 = txtAddress_Line1.Text.Trim();
            CTeam.sAddress_Line2 = txtAddress_Line2.Text.Trim();
            CTeam.sCity = txtCity.Text.Trim();
            CTeam.sState = txtState.Text.Trim();
            CTeam.sZip = txtZIP.Text.Trim();
            CTeam.sCountry = txtCountry.Text.Trim();
            CTeam.sStatus = ddlStatus.SelectedValue.ToString();

            User.sStatus = ddlStatus.SelectedValue.ToString();
            User.sRole = ddlUserRole.SelectedItem.Text;
            User.sRole_Level = ddlRole_Level.SelectedItem.Text;
            User.sUser_Name = txtUserName.Text.Trim();
            User.sPassword = GetSHA1HashData(txtPassword.Text.Trim()); //txtPassword.Text.Trim();
            //User.sSEC_Q1 = "";
            //User.sSEC_A1 = "";
            //User.sSEC_Q2 = "";
            //User.sSEC_A2 = "";

            if (string.IsNullOrEmpty(Request.QueryString["ID"]))
            {

                if (txtName.Text == "" || txtUserName.Text == "" || txtPassword.Text == "")
                { lblerr.Text = "* marked are compulsory"; }
                else
                {

                    if (User.IsUserExists())
                    {
                        lblerr.Text = "UserName Already Taken. Please Choose Another UserName";
                        txtUserName.Focus();
                    }
                    else
                    {

                        CTeam.daCDate = Convert.ToDateTime(DateTime.Now);
                        CTeam.sCPerson = Session["UserName"].ToString();
                        DataTable dti = CTeam.Insert();
                        string CID = dti.Rows[0][0].ToString();

                        User.daCDate = Convert.ToDateTime(DateTime.Now);
                        User.sCPerson = Session["UserName"].ToString();
                        DataTable dtiu = User.Insert();
                        string CUID = dtiu.Rows[0][0].ToString();

                        clsTbClient_User CU = new clsTbClient_User();
                        CU.iClient_ID = Convert.ToInt32(CID);
                        CU.iUser_ID = Convert.ToInt32(CUID);
                        CU.sStatus = ddlStatus.SelectedValue.ToString();
                        CU.Insert();

                        lblerr.Text = "Successfully Registered ClientID: " + CID + "UserID: " + CUID;

                    }
                }
            }
            else
            {
                if (txtName.Text == "")
                { lblerr.Text = "* marked are compulsory"; }
                else
                {
                    int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                    CTeam.iID = i;
                    CTeam.Update();
                    lblerr.Text = "Updated Successfully";
                }

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
            Bind();               
        

    }
    private string GetSHA1HashData(string data)
    {
        //create new instance of md5
        SHA1 sha1 = SHA1.Create();

        //convert the input text to array of bytes
        byte[] hashData = sha1.ComputeHash(Encoding.Default.GetBytes(data));

        //create new instance of StringBuilder to save hashed data
        StringBuilder returnValue = new StringBuilder();

        //loop for each byte and add it to StringBuilder
        for (int i = 0; i < hashData.Length; i++)
        {
            returnValue.Append(hashData[i].ToString());
        }

        // return hexadecimal string
        return returnValue.ToString();
    }
}