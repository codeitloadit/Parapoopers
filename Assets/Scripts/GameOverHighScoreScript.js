#pragma strict

function Start() {
	SpawnerScript.gamesPlayed += 1;
	PossiblyPlayAd();
    GameObject.Find('New').GetComponent(GUIText).guiText.text = '';
    var localHighScore = PlayerPrefs.GetInt('localHighScore', 0);
    guiText.text = localHighScore.ToString('00000');
    if (SpawnerScript.score > localHighScore) {
        PlayerPrefs.SetInt('localHighScore', SpawnerScript.score);
        PlayerPrefs.Save();
        guiText.text = SpawnerScript.score.ToString('00000');
        GameObject.Find('New').GetComponent(GUIText).guiText.text = 'NEW';
    }
	gameObject.GetComponent(LeaderboardScript).ReportScore(SpawnerScript.score);
}

function Update() {
    if (Input.GetMouseButtonDown(0)) {
//    	Application.CaptureScreenshot("Screenshot.png");
        var position = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
        position.z = 0;
        if (GameObject.Find('Play Again Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
            Application.LoadLevel('Game');
        }
        if (GameObject.Find('Main Menu Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
            Application.LoadLevel('Title');
        }
    }
}

function PossiblyPlayAd() {
	if (SpawnerScript.gamesPlayed % 5 == 0) {
		gameObject.GetComponent(AdsScript).PlayAd();
	}
}