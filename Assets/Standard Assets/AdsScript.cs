using System;
using UnityEngine;
using UnityEngine.Advertisements;

public class AdsScript : MonoBehaviour {
	void Awake() {
		if (Advertisement.isSupported) {
			Advertisement.allowPrecache = true;
			Advertisement.Initialize("26320");
		} else {
			Debug.Log("Platform not supported");
		}
	}
	
	public void PlayAd() {
		if(Advertisement.isReady()) {
			Advertisement.Show(null, new ShowOptions {
				pause = true,
				resultCallback = result => {
					Debug.Log(result.ToString());
				}
			});
		} else {
			Debug.Log ("Ad not ready");
		}
	}
}