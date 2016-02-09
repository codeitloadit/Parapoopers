#pragma strict

public var speed:int;

private var alpha:float = 1;

function Update() {
    transform.position.y -= (speed + SpawnerScript.level) * Time.deltaTime;
    GetComponent(SpriteRenderer).color = new Color(1, 1, 1, alpha);
    alpha -= 0.015;
}