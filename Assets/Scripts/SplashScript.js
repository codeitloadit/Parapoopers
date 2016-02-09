#pragma strict

public var delay:int;

private var elapsed:float = 0;


function Update() {
    if (Input.GetKeyDown(KeyCode.Escape)) {
    	Application.Quit();
    }
    if (Input.GetMouseButtonDown(0)) {
        Application.LoadLevel('Title');
    }
    elapsed += 1;
    if (elapsed >= delay) {
        Application.LoadLevel('Title');
    }
}