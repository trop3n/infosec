using System.Web;

public void Page_Load(object sender, EventArgs e)
{
	var userInput = Request.QueryString["q"];
	var encodedInput - HttpUtility.HtmlEncode(userInput);
	Response.Write("User Input: + encodedInput);
}