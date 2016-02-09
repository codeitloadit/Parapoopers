#pragma strict

public var drop:Transform;
public var rainCloud:Sprite;
public var speed:int;

private var isRaining:boolean = false;
private var dropElapsed:int = 0;
private var dropDelay:int = 20;

function Start() {
    transform.position.x = Random.Range(-50.0, 50.0);
    transform.position.y = -100;
    transform.position.z = 0;
}

function Update() {
    if (Input.GetMouseButtonDown(0)) {
        var position = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
        position.z = 0;
        if (GetComponent(BoxCollider2D).bounds.Contains(position)) {
            GetComponent(SpriteRenderer).sprite = rainCloud;
            isRaining = true;
        }
    }
    transform.position.y += (speed + SpawnerScript.level) * Time.deltaTime;

    if (isRaining) {
        dropElapsed += 1;
        if (dropElapsed >= dropDelay) {
            var pos = transform.position;
            pos.x += Random.Range(-GetComponent(SpriteRenderer).bounds.size.x/2 + 8,
                GetComponent(SpriteRenderer).bounds.size.x/2 - 8);
            Instantiate(drop, pos, Quaternion.identity);
        }
    }
}