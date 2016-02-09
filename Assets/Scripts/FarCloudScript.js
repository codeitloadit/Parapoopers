#pragma strict

public var speed:int;

function Start() {
    transform.position.x = Random.Range(-50.0, 50.0);
    transform.position.y = -100;
}

function Update() {
    transform.position.y += (speed + SpawnerScript.level) * Time.deltaTime;
}
