JQUERY MESSAGE CENTER
=====================

##Overview
Easily inform the user. Message Center looks similar to browser messages. 

**Example:** The message that appears when asking you to save your username and password in may modern browsers.

##Instructions
```javascript
<script src="jquery-1.3.2.min.js" type="text/javascript"></script>
<!-- ===== Required files for jQuery Message Center ===== -->
<script src="jquery.message-center.js" type="text/javascript"></script>
<link href="jquery.message-center.css" type="text/css" rel="stylesheet">
<script type="text/javascript">
$(document).ready(function() {
$().message_center({ text: 'Welcome to the jQuery Message Center', 
action: 'slide', 
type: 'warning' });
});
</script>
<!-- ===== End of Required files ===== -->
```

```html
<body>
<div id="message_center"></div>
</body>
```

##Arguments
`text: String`  
A string that contain the message to be displayed.

`type: [default, ‘warning’, ‘custom‘]`  
*(Optional) Integer*  
A string representing one of the predefined or custom display modes (“warning” or custom)

`action: [“slide“, “fade”, or “show”]`  
*(Optional) String*  
A string representing one of the three predefined display styles


