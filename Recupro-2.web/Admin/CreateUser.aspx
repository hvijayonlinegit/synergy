<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminMaster.master" AutoEventWireup="true" CodeFile="CreateUser.aspx.cs" Inherits="Admin_CreateUser" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
 <script type="text/javascript">
        $(document).ready(function () {
          //$("#CreateUser").css('display', 'block');
           // $(".nav li").click(function () {
                //$('#CreateUser').removeClass('active');
                $('#CreateUser').addClass('active');
                $(this).css('background-color','#000000');
            });
        });
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>

    <div class="main">
      <div class="row">
        <div class="col-lg-12">
        <h1 class="page-header">Administrator Dashboard</h1>
            <%--STATUS in the DB Check Later--%>
        <div class="breadcrumbdiv">
        <div class="btn-group btn-breadcrumb">
            <a href="Home.aspx" class="btn btn-default"><i class="glyphicon glyphicon-home" style="padding-bottom: 4px;
    padding-top: 3px;"></i></a>
            <a href="CreateUser.aspx" class="btn btn-default">Create User</a>
          
            
        </div>
        </div>
          <div class="clear10"></div>
        </div>
        <div class="clear"></div>
        <div class="col-lg-4">
       
  <div class="form-group">
                <label for="exampleInputEmail1">First Name*</label>               
                <asp:TextBox ID="txtFirstName" placeholder="First Name" class="form-control" runat="server" ></asp:TextBox>
        </div>
        <div class="form-group">
                <label for="exampleInputEmail1">Last Name*</label>               
                <asp:TextBox ID="txtLastName" placeholder="Last Name" class="form-control" runat="server" ></asp:TextBox>
        </div>
  <div class="form-group">
    <label  class="control-label">Status</label>
    
        <asp:DropDownList class="form-control" ID="ddlStatus" runat="server">
            <asp:ListItem>Active</asp:ListItem>
            <asp:ListItem>Former</asp:ListItem>
            <asp:ListItem>Prospect</asp:ListItem>
            <asp:ListItem>Lead</asp:ListItem>
        </asp:DropDownList>
    
  </div>
    <div class="form-group">
    <label for="inputPassword3" class="control-label">Role</label>  
        <asp:DropDownList  class="form-control" ID="ddlRole" runat="server">
            <asp:ListItem>Recruiter</asp:ListItem>
            <asp:ListItem>Acct_Manager</asp:ListItem>
            <asp:ListItem>Admin</asp:ListItem>
            <asp:ListItem>Entry_Specialist</asp:ListItem>
        </asp:DropDownList>
   
  </div>
    <div class="form-group">
    <label for="inputPassword3" class="control-label">Role_Level</label>   
        <asp:DropDownList ID="ddlRole_Level"  class="form-control" runat="server">
            <asp:ListItem>Lead</asp:ListItem>
            <asp:ListItem>Senior</asp:ListItem>
            <asp:ListItem>Mid</asp:ListItem>
            <asp:ListItem>Junior</asp:ListItem>
        </asp:DropDownList>
 
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">UserName*</label>   
      <asp:TextBox ID="txtUserName" placeholder="UserName" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Password*</label>   
      <asp:TextBox ID="txtPassword" placeholder="Password" class="form-control" runat="server" TextMode="Password"></asp:TextBox>   
  </div>

            <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
  <div class="form-group">
    <label  class="control-label">DOB</label>    
      <asp:TextBox ID="txtDOB" placeholder="Date of Birth" class="form-control" runat="server" ></asp:TextBox>
      <asp:CalendarExtender ID="txtDOB_CalendarExtender" runat="server" 
          TargetControlID="txtDOB">
      </asp:CalendarExtender>
      </div> 
      </ContentTemplate>
         </asp:UpdatePanel>      
      
  <div class="form-group">
    <label for="inputPassword3" class="control-label">SSN</label>
    
      <asp:TextBox ID="txtSSN" placeholder="Social Security Number (SSN)" class="form-control" runat="server" ></asp:TextBox>
   
  </div>
  <div class="form-group">
   <label  class="control-label">Gender</label>    
  <div class="radio">
  <label>
      <asp:RadioButton ID="rbtnMale" runat="server" GroupName="Gender" Checked="true" />
      <%--RecruiterID, Sub_Vendor_ID are in the Data Table Check Later--%>Male
  </label>
</div>
<div class="radio">
  <label> 
    <asp:RadioButton ID="rbtnFemale" runat="server" GroupName="Gender" />
    <%--<input type="radio" name="optionsRadios" id="rbtnFemale" runat="server" value="option2">--%>
    Female
  </label>
</div>
  </div>
  <%--STATUS in the DB Check Later--%>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Primary Email</label>   
      <asp:TextBox ID="txtPrimaryEmail" placeholder="Primary Email" class="form-control" runat="server" ></asp:TextBox>
   
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Secondary Email</label>    
      <asp:TextBox ID="txtSecondaryEmail" placeholder="Secondary Email" class="form-control" runat="server" ></asp:TextBox>   
  </div>
    <div class="form-group">
    <label for="inputPassword3" class="control-label">SkypeID</label>  
      <asp:TextBox ID="txtSkypeID" placeholder="Skype ID" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Type</label>   
        <asp:DropDownList ID="ddlType"  class="form-control" runat="server">
            <asp:ListItem>Employee</asp:ListItem>
            <asp:ListItem>Contractor</asp:ListItem>
            <asp:ListItem>User</asp:ListItem>
        </asp:DropDownList>
 
  </div>
  
      
        </div>
        <div class="col-lg-4">
       
         
        
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Current Location</label>   
      <asp:TextBox ID="txtCurrentLocation" placeholder="Current Location" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Current Client</label>   
      <asp:TextBox ID="txtCurrentClient" placeholder="Current Client" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Available For Interview</label>   
        <asp:DropDownList ID="ddlAvailableForInterview"  class="form-control" runat="server">
            <asp:ListItem>2 Hours</asp:ListItem>
            <asp:ListItem>4 Hours</asp:ListItem>
            <asp:ListItem>8 Hours</asp:ListItem>
            <asp:ListItem>1 Day</asp:ListItem>
            <asp:ListItem>2 Days</asp:ListItem>
        </asp:DropDownList>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Availability To Join</label>   
        <asp:DropDownList ID="ddlAvailabilityToJoin"  class="form-control" runat="server">
            <asp:ListItem>Immediate</asp:ListItem>
            <asp:ListItem>1 Weeks</asp:ListItem>
            <asp:ListItem>2 Weeks</asp:ListItem>
            <asp:ListItem>3 Weeks</asp:ListItem>
            <asp:ListItem>4 Weeks</asp:ListItem>
            <asp:ListItem>5 Weeks</asp:ListItem>
            <asp:ListItem>6 Weeks</asp:ListItem>
            <asp:ListItem>7 Weeks</asp:ListItem>
            <asp:ListItem>8 Weeks</asp:ListItem>
        </asp:DropDownList>
  </div>
   <%--RecruiterID, Sub_Vendor_ID are in the Data Table Check Later--%>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Type2</label>   
        <asp:DropDownList ID="ddlType2"  class="form-control" runat="server">
            <asp:ListItem>C2C</asp:ListItem>
            <asp:ListItem>W2</asp:ListItem>
            <asp:ListItem>ALL</asp:ListItem>
        </asp:DropDownList>
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Primary Skill</label>   
      <asp:TextBox ID="txtPrimarySkill" placeholder="Primary Skill" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Secondary Skill</label>   
      <asp:TextBox ID="txtSecondarySkill" placeholder="Secondary Skill" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">IMMI Status</label>   
      <asp:TextBox ID="txtIMMIStatus" placeholder="IMMI Status" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Description</label>   
      <asp:TextBox ID="txtDescription" placeholder="Description" 
        class="form-control" runat="server" TextMode="MultiLine" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Client Rate</label>   
      $<asp:TextBox ID="txtClientRate" placeholder="Client Rate" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Synergy Rate</label>   
      $<asp:TextBox ID="txtSynergyRate" placeholder="Synergy Rate" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Health Insurance</label>   
      $<asp:TextBox ID="txtHealthInsurance" placeholder="Health Insurance" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">H1B Exp</label>   
      $<asp:TextBox ID="txtH1BExp" placeholder="H1B Exp." class="form-control" runat="server" ></asp:TextBox>    
  </div>
   </div>
   <div class="col-lg-4">
<div class="form-group">
    <label for="inputPassword3" class="control-label">PTO</label>   
      <asp:TextBox ID="txtPTO" placeholder="PTO" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Other IMMI Exp</label>   
     $ <asp:TextBox ID="txtOtherIMMIExp" placeholder="Other IMMI Exp." class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">COMM</label>   
     $ <asp:TextBox ID="txtCOMM" placeholder="COMM" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Number of Years Experience</label>   
      <asp:TextBox ID="txtNumberOfYearsExperience" placeholder="Number of Years Experience" class="form-control" runat="server" ></asp:TextBox>    
  </div>
     <div class="form-group">
    <label for="inputPassword3" class="control-label">Seniority</label>   
        <asp:DropDownList ID="ddlSeniority"  class="form-control" runat="server">
            <asp:ListItem>Lead</asp:ListItem>
            <asp:ListItem>Senior</asp:ListItem>
            <asp:ListItem>Junior</asp:ListItem>
            <asp:ListItem>Mid Level</asp:ListItem>
            <asp:ListItem>Architect</asp:ListItem>
        </asp:DropDownList>
  </div>
     <div class="form-group">
    <label for="inputPassword3" class="control-label">Comm Skills</label>   
        <asp:DropDownList ID="ddlCommSkills"  class="form-control" runat="server">
            <asp:ListItem>Excellent</asp:ListItem>
            <asp:ListItem>Good</asp:ListItem>
            <asp:ListItem>Average</asp:ListItem>
            <asp:ListItem>Normal</asp:ListItem>
        </asp:DropDownList>
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Address Line1</label>   
      <asp:TextBox ID="txtAddressLine1" placeholder="Address Line1" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Address Line2</label>   
      <asp:TextBox ID="txtAddressLine2" placeholder="Address Line2" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">City</label>   
      <asp:TextBox ID="txtCity" placeholder="City" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">State</label>   
      <asp:TextBox ID="txtState" placeholder="State" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Zip</label>   
      <asp:TextBox ID="txtZip" placeholder="Zip" class="form-control" runat="server" ></asp:TextBox>    
  </div>
<div class="form-group">
    <label for="inputPassword3" class="control-label">Country</label>   
      <asp:TextBox ID="txtCountry" placeholder="Country" class="form-control" runat="server" ></asp:TextBox>    
  </div>


  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
        <asp:Button ID="btnSubmit" runat="server" class="btn btn-default" Text="Submit" 
            onclick="btnSubmit_Click" />
     <asp:Label ID="lblerr" runat="server" Text="" Font-Bold="True" ForeColor="Maroon"></asp:Label>
    </div>
  </div>

 
  </div>
  <div class="clear10"></div>
  <div class="col-md-12">
  <div class="row">
  <h1 class="page-header">Existing Users List</h1>
    <div class="col-lg-12">
   <div class="table-responsive">
          <asp:GridView ID="gvUsersList" 
              CssClass="table table-bordered table-striped table-hover" runat="server" AutoGenerateColumns="False" 
              CellPadding="4" EmptyDataText="No Clients Found" ForeColor="#333333" 
              GridLines="None" ShowHeaderWhenEmpty="True" Width="100%">
              <AlternatingRowStyle BackColor="White" />
              <Columns>
                  <asp:BoundField DataField="ID" HeaderText="ID" />
                  <asp:HyperLinkField DataNavigateUrlFields="ID" 
                      DataNavigateUrlFormatString="~/Admin/CreateUser.aspx?ID={0}" 
                      DataTextField="FST_Name" HeaderText="Name" />
                  <asp:BoundField DataField="Status" HeaderText="Status" />
                  <asp:BoundField DataField="Type" HeaderText="Type" />
                  <asp:BoundField DataField="CDate" HeaderText="Created Date" />
              </Columns>
              <EditRowStyle BackColor="#2461BF" />
              <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
              <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
              <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
              <RowStyle BackColor="#EFF3FB" />
              <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
              <SortedAscendingCellStyle BackColor="#F5F7FB" />
              <SortedAscendingHeaderStyle BackColor="#6D95E1" />
              <SortedDescendingCellStyle BackColor="#E9EBEF" />
              <SortedDescendingHeaderStyle BackColor="#4870BE" />
          </asp:GridView>
          </div>
          </div>
        

        <div class="clear">Note: To Edit the Record Click on the Name of the Record.</div>
       </div>
       </div>
      </div>
    </div>
</asp:Content>

