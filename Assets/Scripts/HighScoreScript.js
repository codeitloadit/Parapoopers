#pragma strict

function Start() {
    guiText.text = PlayerPrefs.GetInt('localHighScore', 0).ToString('00000');
}