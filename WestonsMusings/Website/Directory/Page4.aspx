<!-- 
Weston Richardson
CPT-239-W01
-->

<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Page4.aspx.cs" Inherits="Page4" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Update Directory</title>
</head>
<body>
     <form id="form1" runat="server">
        
        <p>
        Telephone Number: <asp:TextBox ID="phone" runat="server" /> <br />       
        First Name: <asp:TextBox ID="firstName" runat="server" /> <br />
        Last Name: <asp:TextBox ID="lastName" runat="server" /> <br />
        Address: <asp:TextBox ID="address" runat="server" /> <br />
        City: <asp:TextBox ID="city" runat="server" /> <br />
        State(XX): <asp:TextBox ID="state" runat="server" /> <br />
        Zip Code: <asp:TextBox ID="zip" runat="server" /></p>
        <asp:Button ID="confirmPhone" runat="server" Text="Button" OnClick="confirmPhone_Click" />
        <br />
        <p>Enter the information to update the directory. (the phone number must match one in the directory)</p>
        <p>Go back to the Phone Directory page to see updates.</p>
        <br />
        <a href="Default.aspx">Click here to go back to the homepage.</a>
   </form>
</body>
</html>
