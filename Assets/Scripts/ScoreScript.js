#pragma strict

function Update() {
    guiText.text = SpawnerScript.score.ToString('00000');
}