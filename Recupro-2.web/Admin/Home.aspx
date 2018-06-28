<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminMaster.master" AutoEventWireup="true" CodeFile="Home.aspx.cs" Inherits="Admin_Home" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
  
    <div class="main">
      <div class="row">
        <div class="col-lg-12">
        <h1 class="page-header">Administrator Dashboard</h1>
        
              <div class="col-md-3 col-sm-6 col-xs-12">
            <!-- this month -->
            <div class="months-bord bord-blue">
                  <div class="months ">
                <p class=" ">Today</p>
                <p class=" ">Profiles : 0</p>
              </div>
                  <div class="months bg-primary pull-right">
                <p class="amount"> <i class="fa fa-usd"></i><br/>
                      152</p>
              </div>
                  <div class="clearfix"></div>
                  <!--<a href="#" class="view-details bg-primary"> View Details <i class="fa fa-chevron-right"></i></a>-->
                </div>
          </div>		
              <div class="col-md-3 col-sm-6 col-xs-12">
            <!-- this month -->
            <div class="months-bord bord-yellow">
                  <div class="months ">
                <p class=" ">Yesterday</p>
                <p class=" ">Profiles : 0</p>
              </div>
                  <div class="months pull-right bg-yellow color-white">
                <p class="amount"> <i class="fa fa-usd"></i><br/>
                      558</p>
              </div>
                  <div class="clearfix"></div>
                  <!--<a href="#" class="view-details bg-yellow"> View Details <i class="fa fa-chevron-right"></i></a>-->
                </div>
          </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
            <!-- this month -->
            <div class="months-bord bord-green">
                  <div class="months ">
                <p class=" ">Last Month</p>
                <p class=" ">Profiles : 0</p>
              </div>
                  <div class="months pull-right bg-green color-white">
                <p class="amount"> <i class="fa fa-usd"></i><br/>
                      15552</p>
              </div>
                  <div class="clearfix"></div>
                  <!--<a href="#" class="view-details bg-green"> View Details <i class="fa fa-chevron-right"></i></a>-->
                </div>
          </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
            <!-- this month -->
            <div class="months-bord bord-red">
                  <div class="months ">
                <p class=" ">This Year</p>
                <p class=" ">Profiles : 0</p>
              </div>
                  <div class="months pull-right bg-red color-white">
                <p class="amount"> <i class="fa fa-usd"></i><br/>
                      550552</p>
              </div>
                  <div class="clearfix"></div>
                  <!--<a href="#" class="view-details bg-red"> View Details <i class="fa fa-chevron-right"></i></a>-->
                </div>
          </div>
          <div class="clear"></div>
         <%-- <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </table>
          </div>--%>
        </div>
       <%-- <div class="clear"></div>
        <div class="col-lg-6">
          <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">Example block-level help text here.</p>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
</form>
        </div>
        <div class="col-lg-6">
          <form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
        </div>
        <div class="clear"></div>
        <div class="col-lg-6">
          <div class="checkbox">
  <label>
    <input type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="checkbox disabled">
  <label>
    <input type="checkbox" value="" disabled>
    Option two is disabled
  </label>
</div>

<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
    Option one is this and that&mdash;be sure to include why it's great
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
    Option two can be something else and selecting it will deselect option one
  </label>
</div>
<div class="radio disabled">
  <label>
    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
    Option three is disabled
  </label>
</div>
        </div>
        <div class="col-lg-6">
          <!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
        </div>
           <div class="clear"></div>
        <div class="col-lg-12">
        <div class="panel panel-primary">
  <div class="panel-heading">Panel heading without title</div>
  <div class="panel-body">
    Panel content
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title</h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
      </div>--%>
      </div>
    </div>
</asp:Content>

