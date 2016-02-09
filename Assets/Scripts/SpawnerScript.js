#pragma strict

public var poops:Transform[] = new Transform[3];
public var bombs:Transform[] = new Transform[3];
public var farclouds:Transform[] = new Transform[3];
public var nearclouds:Transform[] = new Transform[3];

public var powerUps:Transform[] = new Transform[1];

static var score:int = 0;
public var scoreTexts:Transform[] = new Transform[2];

static var isDead:boolean = false;
static var level:int = 0;

static var time:String = '00:00';

private var poopElapsed:int = 0;
private var poopDelay:int = 40;
private var bombElapsed:int = 0;
private var bombDelay:int = 160;
private var farcloudElapsed:int = 0;
private var farcloudDelay:int = 40;
private var nearcloudElapsed:int = 0;
private var nearcloudDelay:int = 400;
private var powerUpElapsed:int = 0;
private var powerUpDelay:int = 1000;

private var deathElapsed:int = 0;
private var deathDelay:int = 60;

static var clockPowerUp:boolean = false;

static var gamesPlayed:int = 0;


function Start() {
    score = 0;
    level = 0;
    isDead = false;
}

function OnGUI() {
	AudioListener.volume = PlayerPrefs.GetFloat('audioVolume', 1.0);
}

function Update() {
    if (Input.GetKeyDown(KeyCode.Escape)) {
//    	Application.CaptureScreenshot("Screenshot.png");
        Application.LoadLevel('Title');
    }
    if (poopElapsed >= poopDelay - level && !isDead) {
        var poop = poops[Random.Range(0, 3)];
        Instantiate(poop, Vector3.zero, Quaternion.identity);
        poopElapsed = 0;
    }
    poopElapsed += 1;
    
//    if (bombElapsed >= bombDelay - level && !isDead) {
//        var bomb = bombs[Random.Range(0, 3)];
//        Instantiate(bomb, Vector3.zero, Quaternion.identity);
//        bombElapsed = 0;
//    }
//    bombElapsed += 1;

    if (farcloudElapsed >= farcloudDelay - level) {
        var farcloud = farclouds[Random.Range(0, 3)];
        Instantiate(farcloud, Vector3.zero, Quaternion.identity);
        farcloudElapsed = 0;
    }
    farcloudElapsed += 1;

    if (nearcloudElapsed >= nearcloudDelay - level) {
        var nearcloud = nearclouds[Random.Range(0, 3)];
        Instantiate(nearcloud, Vector3.zero, Quaternion.identity);
        nearcloudElapsed = 0;
    }
    nearcloudElapsed += 1;

//    if (powerUpElapsed >= powerUpDelay - level) {
//        var powerUp = powerUps[Random.Range(0, 1)];
//        Instantiate(powerUp, Vector3.zero, Quaternion.identity);
//        powerUpElapsed = 0;
//    }
//    powerUpElapsed += 1;

    level = Mathf.Min(score / 30, 25);

    if (isDead) {
        deathElapsed += 1;
        if (deathElapsed >= deathDelay) {
            Application.LoadLevel('GameOver');
        }
    }
}
