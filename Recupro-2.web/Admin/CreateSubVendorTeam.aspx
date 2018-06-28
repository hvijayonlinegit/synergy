<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminMaster.master" AutoEventWireup="true" CodeFile="CreateSubVendorTeam.aspx.cs" Inherits="Admin_CreateSubVendorTeam" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
 <div class="main">
      <div class="row">
        <div class="col-lg-12">
        <h1 class="page-header">Administrator Dashboard</h1>
           <div class="breadcrumbdiv">
        <div class="btn-group btn-breadcrumb">
            <a href="Home.aspx" class="btn btn-default"><i class="glyphicon glyphicon-home" style="padding-bottom: 4px;
    padding-top: 3px;"></i></a>
            <a href="#" class="btn btn-default">Sub Vendor Management</a>
            <a href="CreateSubVendorTeam.aspx" class="btn btn-default">Create Sub Vendor Team</a>
        </div>
        </div>
          <div class="clear10"></div>
        </div>
        <div class="clear"></div>
        <%--<div class="col-lg-6">--%>
         <div class="col-lg-4">
    <div class="form-group">
    <label  class="control-label">Select Company Name</label>
        <asp:DropDownList class="form-control" ID="ddlCompanyName" runat="server">
        </asp:DropDownList>
  </div>
  <div class="form-group">
    <label for="inputEmail3" class="control-label">Name*</label>
        <asp:TextBox ID="txtName" placeholder="Name" class="form-control" runat="server" ></asp:TextBox>
  </div>
  <div class="form-group">
    <label  class="control-label">Status</label>
   
        <asp:DropDownList class="form-control" ID="ddlStatus" runat="server">
            <asp:ListItem>Active</asp:ListItem>
            <asp:ListItem>Former</asp:ListItem>
        </asp:DropDownList>
    
  </div>
    <div class="form-group">
    <label for="inputPassword3" class=" control-label">Type</label>
   
        <asp:DropDownList class="form-control" ID="ddlType" runat="server">
            <asp:ListItem>Owner</asp:ListItem>
            <asp:ListItem>Manager</asp:ListItem>
            <asp:ListItem>Recruiter</asp:ListItem>
            <asp:ListItem>Accounts</asp:ListItem>
        </asp:DropDownList>
   
  </div>
  <div class="form-group">
    <label  class=" control-label">Email</label>
   
      <asp:TextBox ID="txtEmail" placeholder="Email" class="form-control" runat="server" ></asp:TextBox>
  
  </div>
  </div>
  <div class="col-lg-4">
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Primary_Phone</label>
      <asp:TextBox ID="txtPrimaryPhone" placeholder="Primary Phone" class="form-control" runat="server" ></asp:TextBox>
  </div>
  
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Secondary_Phone</label>
   
      <asp:TextBox ID="txtSecondaryPhone" placeholder="Secondary Phone" class="form-control" runat="server" ></asp:TextBox>
    
  </div>
    <div class="form-group">
    <label for="inputPassword3" class="control-label">Location</label>
   
      <asp:TextBox ID="txtLocation" placeholder="Location" class="form-control" runat="server" ></asp:TextBox>
   
  </div>
          <div class="form-group">
    <label for="inputPassword3" class="control-label">Address_Line1</label>
    
      <asp:TextBox ID="txtAddress_Line1" placeholder="Address Line1" class="form-control" runat="server" ></asp:TextBox>
    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Address_Line2</label>
  
      <asp:TextBox ID="txtAddress_Line2" placeholder="Address Line2" class="form-control" runat="server" ></asp:TextBox>
   
  </div>
  
        </div>
         <div class="col-lg-4">
         
  <div class="form-group">
    <label for="inputPassword3" class="control-label">City</label>
 
      <asp:TextBox ID="txtCity" placeholder="City" class="form-control" runat="server" ></asp:TextBox>
  
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">State</label>
    
      <asp:TextBox ID="txtState" placeholder="State" class="form-control" runat="server" ></asp:TextBox>
 
  </div>
  <div class="form-group">

    <label for="inputPassword3" class="control-label">ZIP</label>
    
      <asp:TextBox ID="txtZIP" placeholder="ZIP" class="form-control" runat="server" ></asp:TextBox>
    
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
           <h1 class="page-header">Existing Sub_Vendor Team List</h1>
          <asp:GridView ID="gvClientsList" runat="server" AutoGenerateColumns="False" 
              CellPadding="4" EmptyDataText="No Sub Vendor Team Found" ForeColor="#333333" 
              GridLines="None" ShowHeaderWhenEmpty="True" Width="100%">
              <AlternatingRowStyle BackColor="White" />
              <Columns>
                  <asp:BoundField DataField="ID" HeaderText="ID" />
                  <asp:HyperLinkField DataNavigateUrlFields="ID" 
                      DataNavigateUrlFormatString="~/Admin/CreateSubVendorTeam.aspx?ID={0}" 
                      DataTextField="Name" HeaderText="Name" />
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
        <div class="clear">Note: To Edit the Record Click on the Name of the Record.</div>
       </div>
       </div>
      </div>
    </div>
</asp:Content>

