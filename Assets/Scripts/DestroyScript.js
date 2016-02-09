#pragma strict

private var sprite:SpriteRenderer;
private var text:GUIText;

function Start() {
	sprite = GetComponent(SpriteRenderer) || null;
	text = guiText || null;
}

function Update() {
	if (Mathf.Abs(transform.position.x) > 60 ||
		Mathf.Abs(transform.position.y) > 120 ||
		(sprite && sprite.color.a <= 0) ||
		(text && text.color.a <= 0)) {
//		gameObject.SetActive(false);
		Destroy(gameObject);
	}
}