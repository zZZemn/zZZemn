using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Trophy : MonoBehaviour
{
    public int eiLevelToLoad;
    public string esLevelToLoad;

    public bool euseIntegerToLoadLevel = false;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        GameObject collisionGameObject = collision.gameObject;

        if (collisionGameObject.name == "Lapu-Lapu")
        {
            LoadScene();
        }
    }

    void LoadScene()
    {
        if (euseIntegerToLoadLevel)
        {
            SceneManager.LoadScene(eiLevelToLoad);
        }

        else
        {
            SceneManager.LoadScene(esLevelToLoad);
        }
    }
}
