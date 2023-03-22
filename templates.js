const projectTemplate =
	'<div class="prjctShrink">'
+		'<div id="project" onclick="location.href = \'{PRJCTLINK}\'" PRJCTID="{PRJCTID}">'
+		'<div id="projectInner">'
+			'<div id="titleDiv">'
+				'<p id="projectTitle"localize="PRJCTTITLTE">{TITLE}</p>'
+			'</div>'
+			'<div id="imgDiv" style="background-image: url({IMG});"></div>'
+			'<div id="descDiv">'
+				'<p id="projectDesc"localize="PRJCTDESC">{DESCRIPTION}</p>'
+			'</div>'
+		'</div>'
+		'</div>'
+	'</div>'

/*
<div id="project" onclick="location.href='{PRJCTLINK}'">
	<div style="background-image: url({IMG});" id="projectInner">
		<div id="titleDiv">
			<p id="projectTitle"localize="TITLE">{TITLE}</p>
		</div>
		<div id="descDiv">
			<p id="projectDesc"localize="DESCRIPTION">{DESCRIPTION}</p>
		</div>
	</div>
</div>
*/

const langElement = 
	'<!--Languages-->'
+	'<link rel="stylesheet" href="https://lilf4.github.io/Styles/Language.css" />'
+	'<div id="langDiv">'
+		'<ul id="langBar">'
+			'<li id="langList"><img id="DK-FLAG" class="langImg" src="https://lilf4.github.io/Icons/DK-flag.png" onclick="changeLang(\'DK\')"></li>'
+			'<li id="langList"><img id="EN-FLAG" class="langImg" src="https://lilf4.github.io/Icons/EN-flag.png" onclick="changeLang(\'EN\')"></li>'
+			'<li id="langList"><img id="NL-FLAG" class="langImg hidden" src="https://lilf4.github.io/Icons/NL-flag.png" onclick="changeLang(\'NL\')"></li>'
+		'</ul>'
+	'</div>'