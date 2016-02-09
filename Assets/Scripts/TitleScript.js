#pragma strict

private var auidoLabel:GUIText;
public var poopPop:Transform;


function OnGUI() {
	AudioListener.volume = PlayerPrefs.GetFloat('audioVolume', 1.0);
}

function Start() {
	gameObject.GetComponent(LeaderboardScript).Activate();
	gameObject.GetComponent(LeaderboardScript).Authenticate();
	auidoLabel = GameObject.Find('Audio').guiText;
	if (PlayerPrefs.GetFloat('audioVolume', 1.0) == 0.0) {
		auidoLabel.text = 'AUDIO: OFF';
		;
	} else {
		auidoLabel.text = 'AUDIO: ON';
	}
}

function Update() {
    if (Input.GetMouseButtonDown(0)) {
//    	Application.CaptureScreenshot("Screenshot.png");
        var position = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
        position.z = 0;
        if (GameObject.Find('Play Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
            Application.LoadLevel('Game');
        }
        if (GameObject.Find('Leaderboard Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
        	gameObject.GetComponent(LeaderboardScript).ShowLeaderboard();
        }
        if (GameObject.Find('Audio Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
        	if (auidoLabel.text == 'AUDIO: OFF') {
        		Instantiate(poopPop, transform.position, Quaternion.identity);
        		auidoLabel.text = 'AUDIO: ON';
        		PlayerPrefs.SetFloat('audioVolume', 1.0);
        	} else {
        		auidoLabel.text = 'AUDIO: OFF';
        		PlayerPrefs.SetFloat('audioVolume', 0.0);
        	}
	        PlayerPrefs.Save();
        }
        if (GameObject.Find('Credits Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
            Application.LoadLevel('Credits');
        }
        if (GameObject.Find('Quit Collider').GetComponent(BoxCollider).bounds.Contains(position)) {
            Application.Quit();
        }
    }
    if (Input.GetKeyDown(KeyCode.Escape)) {
        Application.LoadLevel('Splash');
    }
}
