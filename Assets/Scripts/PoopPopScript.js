#pragma strict

public var speed:int;

public var popSounds = new AudioClip[6];

private var alpha:float = 1.0;
private var startY:float;

function Start() {
	audio.clip = popSounds[Random.Range(0, 6)];
	audio.pitch = Random.Range(0.7, 1.4);
    audio.Play();
    startY = transform.position.y;
}

function Update() {
    if (transform.position.y <= -100) {
        Destroy(gameObject);
    }
    transform.position.y -= speed * Time.deltaTime;

    if (transform.position.y <= startY -5) {
        GetComponent(SpriteRenderer).color = new Color(1, 1, 1, alpha);
        alpha -= 0.075;
    }
}