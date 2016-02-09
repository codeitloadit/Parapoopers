#pragma strict

public var chute:Transform;
public var chutes:Sprite[] = new Sprite[6];
public var poopPop:Transform;
public var points:Transform;
public var speed:int;

private var hasChute = true;
private var chuteAlpha:float = 1.0;

function Start() {
    transform.position.x = Random.Range(-40.0, 40.0);
    transform.position.y = 100;
    transform.position.z = 0;
    chute.GetComponent(SpriteRenderer).sprite = chutes[Random.Range(0, 6)];
}

function Update() {
    if (Input.GetMouseButtonDown(0) && Input.touchCount == 0) {
        var mousePos = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
        mousePos.z = 0;
        if (GetComponent(CircleCollider2D).bounds.Contains(mousePos)) {
            popPoop();
        }

        if (GetComponent(BoxCollider2D).bounds.Contains(mousePos)) {
            popChute();
        }
    } else {
        for (var touch in Input.touches){
            if (touch.phase == TouchPhase.Began) {
                var touchPos = Camera.main.ScreenPointToRay(touch.position).origin;
                touchPos.z = 0;
                if (GetComponent(CircleCollider2D).bounds.Contains(touchPos)) {
                    popPoop();
                }

                if (hasChute && GetComponent(BoxCollider2D).bounds.Contains(touchPos)) {
                	popChute();
                }
            }
        }
    }

    if (transform.position.y <= -100) {
        Destroy(gameObject);
        SpawnerScript.isDead = true;
    }

	if (SpawnerScript.clockPowerUp) {
	    transform.position.y -= (speed + SpawnerScript.level) * Time.deltaTime / 2;
	} else {
	    transform.position.y -= (speed + SpawnerScript.level) * Time.deltaTime;
	}

    if (hasChute === false) {
        chute.position.y += (speed + SpawnerScript.level) * Time.deltaTime * 1.5;
        chute.GetComponent(SpriteRenderer).color = new Color(1, 1, 1, chuteAlpha);
        chuteAlpha -= 0.05;
    }

    if (SpawnerScript.isDead) {
        Instantiate(poopPop, transform.position, Quaternion.identity);
        Destroy(gameObject);
    }
}

function popPoop() {
    var score = speed/10 + SpawnerScript.level;
    var pos = transform.position;
    var pointsPos = pos;
    Instantiate(poopPop, pos, Quaternion.identity);
    pointsPos.x = (pos.x/45 + 1) / 2;
    pointsPos.y = (pos.y/80 + 1) / 2;
    var pointsObj = Instantiate(points, pointsPos, Quaternion.identity);
    pointsObj.GetComponent(GUIText).text = score.ToString();
    Destroy(gameObject);
    SpawnerScript.score += score;
}

function popChute() {
	audio.pitch = Random.Range(0.9, 1.1);
	audio.Play();
	hasChute = false;
	speed *= 1.25;
}
