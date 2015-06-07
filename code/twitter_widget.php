<p class="example">Purpose:</p>
A custom widget that gets your tweets and displays them in a widget you can style. Also gets your Twitter avatar and adds a 'follow' button. If you cache your results locally, then you can also get around their daily limits.

<p class="example">Example:</p>
<style>
.twitter_shell { width:300px; background-color:#ffffff; }
.twitter_header { border-bottom:1px solid #dedede; padding:8px; text-align:left; }
.twitter_header img { float:left; margin-right:10px; }
.twitter_header a { font-size:15px; font-weight:bold; color:#239acd; text-decoration:none; }
.twitter_body { height:200px; width:100%; overflow-y:auto; overflow-x:hidden; font-size:11px; text-align:left; }
.twitter_inside { padding:8px; }
.twitter_inside a { font-size:11px; font-weight:normal; color:#239acd; text-decoration:none; }
.twitter_inside .hr { height:1px; border:0; background-color:#dddddd; margin:6px 0; padding:0; }
</style>

<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
<script type="text/javascript">
$(function() {
	function getTweets(username, count, holder, height) {
		// create divs for layout
		$('#' + holder).addClass("twitter_shell");
		$('#' + holder).html('<div id="twitter_header_' + username + '" class="twitter_header" /></div><div id="twitter_body_' + username + '" class="twitter_body" style="height:' + height + 'px"><div id="twitter_inside_' + username + '" class="twitter_inside"><center>Loading...</center></div></div>');
	
		// scrap the xml
		$.ajax({
			type: "GET",
			url: "/code/twitter_widget_load.php?url=http://api.twitter.com/1/statuses/user_timeline.xml?screen_name=" + username + "&count=" + count,
			dataType: "xml",
			success: function(xml) {
				var rss_avatar = $(xml).find("user").first().find("profile_image_url").text();
	
				$('#twitter_header_' + username).html('<div style="overflow:hidden; width:100%;"><a href="http://www.twitter.com/' + username + '" title="View tweets" target="_blank" rel="nofollow"><img src="' + rss_avatar + '" id="avatar_' + username + '" border="0"/></a><a href="http://www.twitter.com/' + username + '" title="View tweets" target="_blank" rel="nofollow">' + username + '</a><div style="margin-top:4px;"><a href="http://twitter.com/' + username + '" class="twitter-follow-button" data-show-count="false" data-width="120px" data-show-screen-name="false">Follow</a></div></div>');
				$("#twitter_inside_" + username).empty();
				$(xml).find("status").each(function() {
					rss_id = $(this).find("id").first().text();
					rss_title = $(this).find("text").text();
					rss_date = $(this).find("created_at").text();
					rss_date2 = rss_date.split("+",1);
					$("#twitter_inside_" + username).append(rss_title + '<br/><a href="http://www.twitter.com/' + username + '/status/' + rss_id + '" title="Read tweet" target="_blank" rel="nofollow">' + rss_date2 + '</a><div class="hr"></div>');
				});
			},
			error: function(xhr, err) {
				// display error here if you can't load it
				$("#twitter_inside_" + username).html("<br/>The tweets were unable to load. Please try again soon.");
			}
		});
	}
	getTweets('myeyesarehungry', 10, 'twitterHolder', 250);
});
</script>

<div id="twitterHolder"></div>

<p class="example">Source Code:</p>
<pre class="code">
<code>
// create a file called 'twitter_widget_load.php' and put this code in it

&lt;?php
if (!isset($_REQUEST["url"])) { exit; }
$url = $_GET["url"];
if (substr($url, -0, 7) != "http://") { exit; }
echo file_get_contents($url);
?&gt;
</code>
</pre>
<br/>

<pre class="code">
<code>
&lt;style&gt;
.twitter_shell { width:300px; background-color:#ffffff; }
.twitter_header { border-bottom:1px solid #dedede; padding:8px; text-align:left; }
.twitter_header img { float:left; margin-right:10px; }
.twitter_header a { font-size:15px; font-weight:bold; color:#239acd; text-decoration:none; }
.twitter_body { height:200px; width:100%; overflow-y:auto; overflow-x:hidden; font-size:11px; text-align:left; }
.twitter_inside { padding:8px; }
.twitter_inside a { font-size:11px; font-weight:normal; color:#239acd; text-decoration:none; }
.twitter_inside .hr { height:1px; border:0; background-color:#dddddd; margin:6px 0; padding:0; }
&lt;/style&gt;

&lt;script type="text/javascript" src="http://platform.twitter.com/widgets.js">&lt;/script&gt;
&lt;script type="text/javascript"&gt;
$(function() {
	function getTweets(username, count, holder, height) {
		// create divs for layout
		$('#' + holder).addClass("twitter_shell");
		$('#' + holder).html('&lt;div id="twitter_header_' + username + '" class="twitter_header" /&gt;&lt;/div&gt;&lt;div id="twitter_body_' + username + '" class="twitter_body" style="height:' + height + 'px"&gt;&lt;div id="twitter_inside_' + username + '" class="twitter_inside"&gt;&lt;center&gt;Loading...&lt;/center&gt;&lt;/div&gt;&lt;/div&gt;');
	
		// scrap the xml
		$.ajax({
			type: "GET",
			url: "/code/twitter_widget_load.php?url=http://api.twitter.com/1/statuses/user_timeline.xml?screen_name=" + username + "&count=" + count,
			dataType: "xml",
			success: function(xml) {
				var rss_avatar = $(xml).find("user").first().find("profile_image_url").text();
	
				$('#twitter_header_' + username).html('&lt;div style="overflow:hidden; width:100%;"&gt;&lt;a href="http://www.twitter.com/' + username + '" title="View tweets" target="_blank" rel="nofollow"&gt;&lt;img src="' + rss_avatar + '" id="avatar_' + username + '" border="0"/&gt;&lt;/a&gt;&lt;a href="http://www.twitter.com/' + username + '" title="View tweets" target="_blank" rel="nofollow"&gt;' + username + '&lt;/a&gt;&lt;div style="margin-top:4px;"&gt;&lt;a href="http://twitter.com/' + username + '" class="twitter-follow-button" data-show-count="false" data-width="120px" data-show-screen-name="false"&gt;Follow&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;');
				$("#twitter_inside_" + username).empty();
				$(xml).find("status").each(function() {
					rss_id = $(this).find("id").first().text();
					rss_title = $(this).find("text").text();
					rss_date = $(this).find("created_at").text();
					rss_date2 = rss_date.split("+",1);
					$("#twitter_inside_" + username).append(rss_title + '&lt;br/&gt;&lt;a href="http://www.twitter.com/' + username + '/status/' + rss_id + '" title="Read tweet" target="_blank" rel="nofollow"&gt;' + rss_date2 + '&lt;/a&gt;&lt;div class="hr"&gt;&lt;/div&gt;');
				});
			},
			error: function(xhr, err) {
				// display error here if you can't load it
				$("#twitter_inside_" + username).html("&lt;br/&gt;The tweets were unable to load. Please try again soon.");
			}
		});
	}
	getTweets('myeyesarehungry', 10, 'twitterHolder', 250);
});
&lt;/script&gt;

&lt;div id="twitterHolder"&gt;&lt;/div&gt;
</code>
</pre>