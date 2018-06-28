<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminMaster.master" AutoEventWireup="true" CodeFile="CreateReq.aspx.cs" Inherits="Admin_CreateReq" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
 <div class="main">
      <div class="row">
        <div class="col-lg-12">
        <h1 class="page-header">Administrator Dashboard</h1>
        <%--<h2>Client Management -- Create Client</h2>--%>
        <div class="breadcrumbdiv">
        <div class="btn-group btn-breadcrumb">
            <a href="Home.aspx" class="btn btn-default"><i class="glyphicon glyphicon-home" style="padding-bottom: 4px;
    padding-top: 3px;"></i></a>
            <a href="#" class="btn btn-default">Create Requirement</a>
            <%--<a href="CreateClient.aspx" class="btn btn-default">Create Client</a>--%>
            
        </div>
        </div>
          <div class="clear10"></div>
        </div>
        <div class="clear"></div>
        <%--<div class="col-lg-6">--%>
       <div class="col-lg-4">
  <div class="form-group">
                <label for="exampleInputEmail1">Select Client*</label>               
                <asp:DropDownList class="form-control" ID="ddlClient" runat="server">
        </asp:DropDownList>
        </div>
        <div class="form-group">
                <label for="exampleInputEmail1">Title*</label>               
                <asp:TextBox ID="txtTitle" placeholder="Title" class="form-control" runat="server" ></asp:TextBox>
        </div>
  <div class="form-group">
    <label  class="control-label">Status</label>
    
        <asp:DropDownList class="form-control" ID="ddlStatus" runat="server">
            <asp:ListItem>Active</asp:ListItem>
            <asp:ListItem>Former</asp:ListItem>
            <asp:ListItem>Withdrawn</asp:ListItem>
            <asp:ListItem>InEligible</asp:ListItem>
        </asp:DropDownList>
    
  </div>
  <div class="form-group">
  <label  class="control-label">Type</label>
        <asp:DropDownList ID="ddlType" class="form-control" runat="server">
            <asp:ListItem>C2C</asp:ListItem>
            <asp:ListItem>W2</asp:ListItem>
            <asp:ListItem>ALL</asp:ListItem>
        </asp:DropDownList>
 
  </div>
  <div class="form-group">
    <label  class="control-label">Primary Skill</label>    
      <asp:TextBox ID="txtPrimarySkill" placeholder="Primary Skill" class="form-control" runat="server" ></asp:TextBox>
      </div>
      <div class="form-group">
    <label  class="control-label">Secondary Skill</label>    
      <asp:TextBox ID="txtSecondarySkill" placeholder="Secondary Skill" class="form-control" runat="server" ></asp:TextBox>
      </div> 
  
  </div>
  <div class="col-lg-4">
  <div class="form-group">
    <label for="inputPassword3" class="control-label">IMMI Status</label>
      <asp:TextBox ID="txtIMMIStatus" placeholder="IMMI Status" class="form-control" runat="server" ></asp:TextBox>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Description</label>  
      <asp:TextBox ID="txtAddress_Line2" placeholder="Description" 
          class="form-control" runat="server" TextMode="MultiLine" ></asp:TextBox>
    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Client Rate</label>   
      <asp:TextBox ID="txtClientRate" placeholder="Client Rate" class="form-control" runat="server" ></asp:TextBox>
   
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Synergy Rate</label>    
      <asp:TextBox ID="txtSynergyRate" placeholder="Synergy Rate" class="form-control" runat="server" ></asp:TextBox>   
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Priority</label>  
      <asp:TextBox ID="txtPriority" placeholder="Priority" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  
 
    
        </div>
        <div class="col-lg-4">
        <div class="form-group">
    <label for="inputPassword3" class="control-label">No of Years Experience</label>   
      <asp:TextBox ID="txtNoofYearsExp" placeholder="Number of Years Experience" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  
        <div class="form-group">
    <label for="inputPassword3" class="control-label">Seniority</label>   
      <asp:TextBox ID="txtSeniority" placeholder="Seniority" class="form-control" runat="server" ></asp:TextBox>    
  </div>
          <div class="form-group">
    <label for="inputPassword3" class="control-label">Date Opened</label>  
        <asp:TextBox ID="txtDateOpened" placeholder="Date Opened" class="form-control" runat="server" ></asp:TextBox>    
  </div>
          <div class="form-group">
    <label for="inputPassword3" class="control-label">Sub For Review CNT</label>   
        <asp:TextBox ID="txtSubForReviewCNT" placeholder="Sub For Review CNT" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Ready For CLNT CNT</label>   
      <asp:TextBox ID="txtReadyForCLNTCNT" placeholder="Ready For CLNT CNT" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Sub To CLNT CNT</label>   
      <asp:TextBox ID="txtSbuToCLNTCNT" placeholder="Sub To CLNT CNT" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <%--<div class="form-group">
    <label  class="control-label">Status Reason</label>
    
        <asp:DropDownList class="form-control" ID="ddlStatusReason" runat="server">
            <asp:ListItem>Select</asp:ListItem>
            <asp:ListItem>No Response From Cand</asp:ListItem>
            <asp:ListItem>Took Another Job</asp:ListItem>
            <asp:ListItem>Ready to Join</asp:ListItem>
            <asp:ListItem>Joined at Client</asp:ListItem>
        </asp:DropDownList>
    
  </div>
  <div class="form-group">
    <label  class="control-label">Stage</label>
    
        <asp:DropDownList class="form-control" ID="ddlStage" runat="server">
            <asp:ListItem>Select</asp:ListItem>
            <asp:ListItem>Submitted for Review</asp:ListItem>
            <asp:ListItem>Ready for Client</asp:ListItem>
            <asp:ListItem>Submitted to Client</asp:ListItem>
            <asp:ListItem>Selected</asp:ListItem>
            <asp:ListItem>Rejected</asp:ListItem>
        </asp:DropDownList>
    
  </div>
  <div class="form-group">
    <label  class="control-label">Stage Notes</label>
    <asp:TextBox ID="txtStageNotes" placeholder="Stage Notes" class="form-control" runat="server" ></asp:TextBox>
  </div>--%>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
        <asp:Button ID="btnSubmit" runat="server" class="btn btn-default" Text="Submit"/>
     <asp:Label ID="lblerr" runat="server" Text="" Font-Bold="True" ForeColor="Maroon"></asp:Label>
    </div>
  </div>
  </div>
  <div class="clear10"></div>
  <div class="col-md-12">
  <div class="row">
  <h1 class="page-header">Existing Requirements List</h1>
    <div class="">
   <div class="table-responsive">
          <asp:GridView ID="gvClientsList" CssClass="table table-bordered table-striped table-hover" runat="server" AutoGenerateColumns="False" 
              CellPadding="4" EmptyDataText="No Clients Found" ForeColor="#333333" 
              GridLines="None" ShowHeaderWhenEmpty="True" Width="100%">
              <AlternatingRowStyle BackColor="White" />
              <Columns>
                  <asp:BoundField DataField="ID" HeaderText="ID" />
                  <asp:HyperLinkField DataNavigateUrlFields="ID" 
                      DataNavigateUrlFormatString="~/Admin/CreateClient.aspx?ID={0}" 
                      DataTextField="Name" HeaderText="Name" />
                  <asp:BoundField DataField="Status" HeaderText="Status" />
                  <asp:BoundField DataField="Type" HeaderText="Type" />
                  <asp:BoundField DataField="Location" HeaderText="Location" />
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

