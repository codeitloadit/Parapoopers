using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class LeaderboardScript : MonoBehaviour {

	public void Activate() {
		PlayGamesPlatform.Activate();
	}

	public void Authenticate() {
		Social.localUser.Authenticate((bool success) => {});
	}
	
	public void ShowLeaderboard() {
		PlayGamesPlatform.Instance.ShowLeaderboardUI("CgkI-NXT_L8QEAIQAA");
	}
	
	public void ReportScore(int score) {
		Social.ReportScore(score, "CgkI-NXT_L8QEAIQAA", (bool success) => {});

		if (score >= 500){
			Social.ReportProgress("CgkI-NXT_L8QEAIQAg", 100.0f, (bool success) => {});
		}
		if (score >= 1000){
			Social.ReportProgress("CgkI-NXT_L8QEAIQAw", 100.0f, (bool success) => {});
		}
		if (score >= 1500){
			Social.ReportProgress("CgkI-NXT_L8QEAIQBA", 100.0f, (bool success) => {});
		}
		if (score >= 2000){
			Social.ReportProgress("CgkI-NXT_L8QEAIQBQ", 100.0f, (bool success) => {});
		}
		if (score >= 2500){
			Social.ReportProgress("CgkI-NXT_L8QEAIQBg", 100.0f, (bool success) => {});
		}
		if (score >= 3000){
			Social.ReportProgress("CgkI-NXT_L8QEAIQBw", 100.0f, (bool success) => {});
		}
		if (score >= 3500){
			Social.ReportProgress("CgkI-NXT_L8QEAIQCA", 100.0f, (bool success) => {});
		}
		if (score >= 4000){
			Social.ReportProgress("CgkI-NXT_L8QEAIQCQ", 100.0f, (bool success) => {});
		}
		if (score >= 4500){
			Social.ReportProgress("CgkI-NXT_L8QEAIQCg", 100.0f, (bool success) => {});
		}
		if (score >= 5000){
			Social.ReportProgress("CgkI-NXT_L8QEAIQCw", 100.0f, (bool success) => {});
		}
	}
}
