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

public partial class Admin_CreateClient : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
       
        if (!IsPostBack)
        {
            //HtmlGenericControl lic = (HtmlGenericControl)(Page.Master.FindControl("ClientManagement"));
            //lic.Attributes["Class"] = "open";
            

            HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("CreateClient"));
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
                clsTbClient Client = new clsTbClient();
                Client.iID = i;
                DataTable dt = Client.SelectOneWIDLogic();

                if (dt.Rows.Count > 0)
                {
                    txtName.Text = dt.Rows[0]["Name"].ToString();
                    ddlStatus.SelectedValue = dt.Rows[0]["Status"].ToString();
                    ddlType.SelectedValue = dt.Rows[0]["Type"].ToString();
                    txtLocation.Text = dt.Rows[0]["Location"].ToString();
                    txtAddress_Line1.Text = dt.Rows[0]["Address_Line1"].ToString();
                    txtAddress_Line2.Text = dt.Rows[0]["Address_Line2"].ToString();
                    txtCity.Text = dt.Rows[0]["City"].ToString();
                    txtState.Text = dt.Rows[0]["State"].ToString();
                    txtZIP.Text = dt.Rows[0]["Zip"].ToString();
                    txtCountry.Text = dt.Rows[0]["Country"].ToString();
                    txtIndustry.Text = dt.Rows[0]["Industry"].ToString();
                }
            }
        }
    }
    private void Bind()
    {
        clsTbClient Client = new clsTbClient();
        DataTable dt = Client.SelectAll();
        gvClientsList.DataSource = dt;
        gvClientsList.DataBind();
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
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
       
        
            clsTbClient Client = new clsTbClient();
            Client.sName = txtName.Text.Trim();
            Client.sStatus = ddlStatus.SelectedValue.ToString();
            Client.sType = ddlType.SelectedValue.ToString();
            Client.sLocation = txtLocation.Text.Trim();
            Client.sAddress_Line1 = txtAddress_Line1.Text.Trim();
            Client.sAddress_Line2 = txtAddress_Line2.Text.Trim();
            Client.sCity = txtCity.Text.Trim();
            Client.sState = txtState.Text.Trim();
            Client.sZip = txtZIP.Text.Trim();
            Client.sCountry = txtCountry.Text.Trim();
            Client.sIndustry = txtIndustry.Text.Trim();

            clsTbUser User = new clsTbUser();
            User.sStatus = ddlStatus.SelectedValue.ToString();
            User.sRole = ddlRole.SelectedItem.Text;
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
                { lblerr.Text = "* Marked fields are Empty."; }
                else
                {

                    if (User.IsUserExists())
                    {
                        lblerr.Text = "UserName Already Taken. Please Choose Another UserName";
                        txtUserName.Focus();
                    }
                    else
                    {

                        Client.daCDate = Convert.ToDateTime(DateTime.Now);
                        Client.sCPerson = Session["UserName"].ToString();
                        DataTable dti = Client.Insert();
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
                { lblerr.Text = "* Marked fields are Empty."; }
                else
                {
                    int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                    Client.iID = i;
                    Client.Update();
                    lblerr.Text = "Updated Successfully";
                }

            }

            txtName.Text = "";
            txtLocation.Text = "";
            txtAddress_Line1.Text = "";
            txtAddress_Line2.Text = "";
            txtCity.Text = "";
            txtState.Text = "";
            txtZIP.Text = "";
            txtCountry.Text = "";
            txtIndustry.Text = "";
            

            Bind();
        
    }
}