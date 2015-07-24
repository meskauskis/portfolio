<p class="example">Purpose:</p>
Create a link that users can click on to automatically add an event to their iCalendar.

<p class="example">Example:</p>
<a href="/code/ical.php?sub=My Birthday!&loc=My Apartment&sdate=20111106&stime=2000&edate=20111106&etime=2400" title="Add calendar reminder">Add a Reminder</a>

<p class="example">Source Code:</p>
<pre class="code">
<code>
// create a file called 'ical.php' and put this code in it

&lt;?
$subject = htmlspecialchars($_GET['sub']);
$location = htmlspecialchars($_GET['loc']);
$startDate = htmlspecialchars($_GET['sdate']);
$startTime = htmlspecialchars($_GET['stime']);
$startHour = 4 + (substr($startTime, 0, 2));
$startMin = substr($startTime, -2);
$endDate = htmlspecialchars($_GET['edate']);
$endTime = htmlspecialchars($_GET['etime']);
$endHour = 4 + (substr($endTime, 0, 2));
$endMin = substr($endTime, -2);

header('Content-type: text/calendar; charset=utf-8');
header('Content-Disposition: inline; filename=calendar.ics');

echo "BEGIN:VCALENDAR\r\n"
. "PRODID:-//Microsoft Corporation//Outlook 11.0 MIMEDIR//EN\r\n"
. "VERSION:2.0\r\n"
. "METHOD:PUBLISH\r\n"
. "BEGIN:VEVENT\r\n"
. "DTSTART:".$startDate."T".$startTime."00\r\n"
. "DTEND:".$endDate."T".$endTime."00\r\n"
. "LOCATION:".$location."\r\n"
. "UID:".md5(uniqid(mt_rand(), true))."\r\n"
. "DTSTAMP:".gmdate('Ymd').'T'.gmdate('His')."Z\r\n"
. "SUMMARY:".$subject."\r\n"
. "CLASS:PUBLIC\r\n"
. "BEGIN:VALARM\r\n"
. "TRIGGER:-PT15M\r\n"
. "ACTION:DISPLAY\r\n"
. "DESCRIPTION:Reminder\r\n"
. "END:VALARM\r\n"
. "END:VEVENT\r\n"
. "END:VCALENDAR\r\n";

echo $ical;
exit;
?&gt;
</code>
</pre>
<br/>

<pre class="code">
<code>
&lt;a href="ical.php?sub=My Birthday!&loc=My Apartment&sdate=20111106&stime=2000&edate=20111106&etime=2400" title="Add calendar reminder"&gt;Add a Reminder&lt;/a&gt;
</code>
</pre>