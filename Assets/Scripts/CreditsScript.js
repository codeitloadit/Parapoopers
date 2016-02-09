#pragma strict

function Update() {
    if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Escape)) {
        Application.LoadLevel('Title');
    }
}