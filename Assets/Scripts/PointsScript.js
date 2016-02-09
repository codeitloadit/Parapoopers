#pragma strict

public var speed:int;

private var alpha:float = 1;

function Update() {
    transform.position.y += ((speed + SpawnerScript.level)) * Time.deltaTime/200;
    // guiText.fontSize += 3;
    guiText.color = new Color(1, 1, 1, alpha);
    alpha -= 0.02;
}