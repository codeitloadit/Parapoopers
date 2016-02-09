#pragma strict

public var speed:int;

function Start() {
    transform.position.x = Random.Range(-40.0, 40.0);
    transform.position.y = -100;
    transform.position.z = 0;
}

function Update () {
    if (Input.GetMouseButtonDown(0) && Input.touchCount == 0) {
        var mousePos = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
        mousePos.z = 0;
        if (GetComponent(CircleCollider2D).bounds.Contains(mousePos)) {
            slowTime();
        }
    } else {
        for (var touch in Input.touches){
            if (touch.phase == TouchPhase.Began) {
                var touchPos = Camera.main.ScreenPointToRay(touch.position).origin;
                touchPos.z = 0;
                if (GetComponent(CircleCollider2D).bounds.Contains(touchPos)) {
                    slowTime();
                }
            }
        }
    }
    transform.position.y += (speed + SpawnerScript.level) * Time.deltaTime;

    if (transform.position.y >= 500) {
    	SpawnerScript.clockPowerUp = false;
    	Destroy(gameObject);
    }
}

function slowTime() {
	SpawnerScript.clockPowerUp = true; 
}