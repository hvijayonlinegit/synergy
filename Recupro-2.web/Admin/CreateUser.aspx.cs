using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using RecuPro.Data;
using System.Data;
using System.Security.Cryptography;
using System.Text;

public partial class Admin_CreateUser : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            HtmlGenericControl li = (HtmlGenericControl)(Page.Master.FindControl("CreateUser"));
            li.Attributes["Class"] = "active";

            Bind();

            if (string.IsNullOrEmpty(Request.QueryString["ID"]))
            {
                // Response.Redirect("~/Admin/CreateClient.aspx");
            }
            else
            {
                int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                clsTbContact Contact = new clsTbContact();
                Contact.iID = i;
                DataTable dt = Contact.SelectOneWIDLogic();

                if (dt.Rows.Count > 0)
                {

                    txtFirstName.Text = dt.Rows[0]["FST_Name"].ToString();
                    txtLastName.Text = dt.Rows[0]["LAST_Name"].ToString();
                    txtDOB.Text = dt.Rows[0]["DOB"].ToString();
                    txtSSN.Text = dt.Rows[0]["SSN"].ToString();
                    if (dt.Rows[0]["Gender"].ToString() == "Male")
                        rbtnMale.Checked = true;
                    else
                        rbtnFemale.Checked = true;
                    ddlStatus.SelectedValue = dt.Rows[0]["Status"].ToString();
                    txtPrimaryEmail.Text = dt.Rows[0]["Primary_Email"].ToString();
                    txtSecondaryEmail.Text = dt.Rows[0]["Secondary_Email"].ToString();
                    txtSkypeID.Text = dt.Rows[0]["SkypeID"].ToString();
                    ddlType.SelectedValue = dt.Rows[0]["Type"].ToString();
                    txtCurrentLocation.Text = dt.Rows[0]["Current_Location"].ToString();
                    txtCurrentClient.Text = dt.Rows[0]["Current_Client"].ToString();
                    ddlAvailableForInterview.SelectedValue = dt.Rows[0]["Available_For_Interview"].ToString();
                    ddlAvailabilityToJoin.SelectedValue = dt.Rows[0]["Availability_To_Join"].ToString();
                    ddlType2.SelectedValue = dt.Rows[0]["Type2"].ToString();
                    txtPrimarySkill.Text = dt.Rows[0]["Primary_Skill"].ToString();
                    txtSecondarySkill.Text = dt.Rows[0]["Secondary_Skill"].ToString();
                    txtIMMIStatus.Text = dt.Rows[0]["IMMI_Status"].ToString();
                    txtDescription.Text = dt.Rows[0]["Description"].ToString();
                    txtClientRate.Text = dt.Rows[0]["Client_Rate"].ToString();
                    txtSynergyRate.Text = dt.Rows[0]["Synergy_Rate"].ToString();
                    txtHealthInsurance.Text = dt.Rows[0]["health_Insurance"].ToString();
                    txtH1BExp.Text = dt.Rows[0]["H1B_Exp"].ToString();
                    txtPTO.Text = dt.Rows[0]["PTO"].ToString();
                    txtOtherIMMIExp.Text = dt.Rows[0]["Other_IMMI_Exp"].ToString();
                    txtCOMM.Text = dt.Rows[0]["COMM"].ToString();
                    txtNumberOfYearsExperience.Text = dt.Rows[0]["No_Of_Years_Exp"].ToString();
                    ddlSeniority.SelectedValue = dt.Rows[0]["Seniority"].ToString();
                    ddlCommSkills.SelectedValue = dt.Rows[0]["Comm_Skills"].ToString();
                    txtAddressLine1.Text = dt.Rows[0]["Address_Line1"].ToString();
                    txtAddressLine2.Text = dt.Rows[0]["Address_Line2"].ToString();
                    txtCity.Text = dt.Rows[0]["City"].ToString();
                    txtState.Text = dt.Rows[0]["State"].ToString();
                    txtZip.Text = dt.Rows[0]["Zip"].ToString();
                    txtCountry.Text = dt.Rows[0]["Country"].ToString();
                    
                }
            }

        }
        
        
    }
    private void Bind()
    {
        clsTbContact Contact = new clsTbContact();
        DataTable dt = Contact.SelectAll();
        gvUsersList.DataSource = dt;
        gvUsersList.DataBind();
    }
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        if (txtFirstName.Text == "" || txtLastName.Text == "" || txtUserName.Text == "" || txtPassword.Text == "")
        { lblerr.Text = "* Marked fields are Empty."; }
        else
        {
            clsTbContact Contact = new clsTbContact();
            Contact.sFST_Name = txtFirstName.Text.Trim();
            Contact.sLAST_Name = txtLastName.Text.Trim();
            Contact.daDOB = Convert.ToDateTime(txtDOB.Text.Trim());
            Contact.sSSN = txtSSN.Text.Trim();
            if (rbtnMale.Checked == true)
                Contact.sGender = "Male";
            else
                Contact.sGender = "Female";
            Contact.sStatus = ddlStatus.SelectedValue.ToString();
            Contact.sPrimary_Email = txtPrimaryEmail.Text.Trim();
            Contact.sSecondary_Email = txtSecondaryEmail.Text.Trim();
            Contact.sSkypeID = txtSkypeID.Text.Trim();
            Contact.sType = ddlType.SelectedValue.ToString();
            Contact.sCurrent_Location = txtCurrentLocation.Text.Trim();
            Contact.sCurrent_Client = txtCurrentClient.Text.Trim();
            Contact.sAvailable_For_Interview = ddlAvailableForInterview.SelectedValue.ToString();
            Contact.sAvailability_To_Join = ddlAvailabilityToJoin.SelectedValue.ToString();
            //Contact.iRecruiterID = "";
            //Contact.iSub_Vendor_ID = "";
            Contact.sType2 = ddlType2.SelectedValue.ToString();
            Contact.sPrimary_Skill = txtPrimarySkill.Text.Trim();
            Contact.sSecondary_Skill = txtSecondarySkill.Text.Trim();
            Contact.sIMMI_Status = txtIMMIStatus.Text.Trim();
            Contact.sDescription = txtDescription.Text.Trim();

            if (txtDOB.Text == "") { txtDOB.Text = "01/01/1900"; }
            if (txtClientRate.Text == "") { txtClientRate.Text = "0.0"; }
            if (txtSynergyRate.Text == "") { txtSynergyRate.Text = "0.0"; }
            if (txtHealthInsurance.Text == "") { txtHealthInsurance.Text = "0.0"; }
            if (txtH1BExp.Text == "") { txtH1BExp.Text = "0.0"; }
            if (txtPTO.Text == "") { txtPTO.Text = "0"; }
            if (txtOtherIMMIExp.Text == "") { txtOtherIMMIExp.Text = "0.0"; }
            if (txtCOMM.Text == "") { txtCOMM.Text = "0.0"; }
            if (txtNumberOfYearsExperience.Text == "") { txtNumberOfYearsExperience.Text = "0"; }

            Contact.dcClient_Rate = Convert.ToDecimal(txtClientRate.Text.Trim());
            Contact.dcSynergy_Rate = Convert.ToDecimal(txtSynergyRate.Text.Trim());
            Contact.dcHealth_Insurance = Convert.ToDecimal(txtHealthInsurance.Text.Trim());
            Contact.dcH1B_Exp = Convert.ToDecimal(txtH1BExp.Text.Trim());
            Contact.iPTO = Convert.ToInt32(txtPTO.Text.Trim());
            Contact.dcOther_IMMI_Exp = Convert.ToDecimal(txtOtherIMMIExp.Text.Trim());
            Contact.dcCOMM = Convert.ToDecimal(txtCOMM.Text.Trim());
            Contact.iNo_Of_Years_Exp = Convert.ToInt32(txtNumberOfYearsExperience.Text.Trim());
            Contact.sSeniority = ddlSeniority.SelectedValue.ToString();
            Contact.sComm_Skills = ddlCommSkills.SelectedValue.ToString();
            Contact.sAddress_Line1 = txtAddressLine1.Text.Trim();
            Contact.sAddress_Line2 = txtAddressLine2.Text.Trim();
            Contact.sCity = txtCity.Text.Trim();
            Contact.sState = txtState.Text.Trim();
            Contact.sZip = txtZip.Text.Trim();
            Contact.sCountry = txtCountry.Text.Trim();
           

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
                if (User.IsUserExists())
                {
                    lblerr.Text = "UserName Already Taken. Please Choose Another UserName";
                    txtUserName.Focus();
                }
                else
                {
                    Contact.daCDate = Convert.ToDateTime(DateTime.Now);
                    Contact.sCPerson = Session["UserName"].ToString();
                    DataTable dti = Contact.Insert();
                    string CID = dti.Rows[0][0].ToString();

                    User.daCDate = Convert.ToDateTime(DateTime.Now);
                    User.sCPerson = Session["UserName"].ToString();
                    DataTable dtiu = User.Insert();
                    string CUID = dtiu.Rows[0][0].ToString();

                    clsTbContact_User CU = new clsTbContact_User();
                    CU.iContact_ID = Convert.ToInt32(CID);
                    CU.iUser_ID = Convert.ToInt32(CUID);
                    CU.sStatus = ddlStatus.SelectedValue.ToString();
                    CU.Insert();

                    lblerr.Text = "Successfully Registered Contact ID: " + CID + "UserID: " + CUID;
                }
            }
            else
            {
                int i = Convert.ToInt32(Request.QueryString["id"].ToString());
                Contact.iID = i;
                Contact.Update();
                lblerr.Text = "Updated Successfully";
                Bind();
            }
        }

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