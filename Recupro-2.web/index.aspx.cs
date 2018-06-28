using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Security.Cryptography;
using System.Text;
using System.Data;
using RecuPro.Data;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnLogin_Click(object sender, EventArgs e)
    {

        //txtPassword.Text = GetSHA1HashData(txtUserName.Text);

        clsTbUser User = new clsTbUser();
        if (txtUserName.Text == "" || txtPassword.Text == "")
        { lblerr.Text = "User Name and Password is Mandatary"; }
        else
        {
            User.sUser_Name = txtUserName.Text.Trim();
            User.sPassword = GetSHA1HashData(txtPassword.Text);
            if (User.IsUserExists_Login())
            {
                if (txtUserName.Text == "SuperAdmin" || txtUserName.Text == "superadmin" || txtUserName.Text == "SUPERADMIN")
                {
                    Session["UserName"] = txtUserName.Text.Trim();
                    Response.Redirect("Admin/Home.aspx"); lblerr.Text = "";
                }
            }
            else
            {
                lblerr.Text = "UserName or Password is incorrect or Account is inactive. Contact Admin.";
                txtUserName.Text = "";
                txtPassword.Text = "";
            }

        }


        //Response.Redirect("Admin/Home.aspx");
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