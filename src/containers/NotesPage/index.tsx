import React, { useEffect, useState } from "react";

const NotesPage = () => {
  const githubFilesList = useCodiaryRepolist();
  console.log(githubFilesList);
  return (
    <div
      style={{
        marginTop: "2em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {githubFilesList.map(({ path, mode, type, sha, size, url }) => (
        <GithubFileDiv key={path} path={path} url={url} sha={sha} />
      ))}
    </div>
  );
};

type GithubFilePath = {
  path: string;
  mode?: string;
  type?: string;
  sha: string;
  size?: string;
  url: string;
};

const GithubFileDiv = ({ path, url, sha }: GithubFilePath) => {
  const file = useFile(url);
  const commit = useCommit(path);
  console.log(file, commit);
  return (
    <div>
      {path}
      {commit && commit.length > 0 && commit[0].commit.message}
    </div>
  );
};

function useCommit(path: string) {
  const [commit, setCommit] = useState<any[]>([]);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/charlie4284/Codiary/commits?path=${path}`
    )
      .then((res) => {
        res
          .json()
          .then((res) => {
            setCommit(res);
          })
          .catch((err) => {
            if (process.env.NODE_ENV === "development") console.error(err);
          });
      })
      .catch((err) => {
        if (process.env.NODE_ENV === "development") console.error(err);
      });
  }, [path]);
  return commit;
}

function useFile(url: string) {
  const [file, setFile] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((res) => {
            setFile(res);
          })
          .catch((err) => {
            if (process.env.NODE_ENV === "development") console.error(err);
          });
      })
      .catch((err) => {
        if (process.env.NODE_ENV === "development") console.error(err);
      });
  }, [url]);
  return file;
}

function useCodiaryRepolist() {
  const [codiaryFiles, setCodiaryFiles] = useState([]);
  async function fetchMaster() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/charlie4284/Codiary/git/refs/heads/master"
      );
      const json = await res.json();
      return json;
    } catch (err) {
      throw err;
    }
  }
  async function fetchObjUrl(resFromMaster: any) {
    const { ref, url, object } = resFromMaster;
    const { sha, type, url: objUrl } = object;
    try {
      const res = await fetch(objUrl);
      const json = await res.json();
      return json;
    } catch (err) {
      throw err;
    }
  }
  async function fetchTree(resFromObjUrl: any) {
    const { tree, ...otherProps } = resFromObjUrl;
    const { sha, url } = tree;
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    fetchMaster()
      .then((res) => {
        fetchObjUrl(res)
          .then((res) => {
            fetchTree(res)
              .then((res) => {
                const { sha, url, tree } = res;
                setCodiaryFiles(tree);
              })
              .catch((err) => {
                if (process.env.NODE_ENV === "development") console.error(err);
              });
          })
          .catch((err) => {
            if (process.env.NODE_ENV === "development") console.error(err);
          });
      })
      .catch((err) => {
        if (process.env.NODE_ENV === "development") console.error(err);
      });
  }, []);
  return codiaryFiles;
}

export default NotesPage;
